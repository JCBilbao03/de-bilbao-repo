import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { deleteMenu, getMenu } from "../../firestore/firestoreQueries";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import ModalContent from "./ModalContent";
export default function ModalTable(props) {
  const [menu, setMenu] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [selectedItem, setSelectedItem] = useState({});

  // call when fetching sizes data
  const onMenuUpdate = async (query) => {
    let menuArray = [];
    query.forEach((docs) => {
      menuArray.push({ id: docs.id, ...docs.data() });
    });
    setMenu(menuArray);
  };

  // get the categories data
  const fetchMenu = async () => {
    await getMenu(onMenuUpdate);
  };

  // call when deleting an item in the menu
  const handleDelete = async (doc) => {
    Swal.fire({
      title: "Do you want to delete " + doc.name + "?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteMenu(doc.id).then(async () => {
          await getMenu(onMenuUpdate).then(() => {
            Swal.fire(
              "Success!",
              "You have deleted " + doc.name + " in your menu!",
              "success"
            );
          });
        });
      }
    });
  };
  // call when editing an item in the menu
  const handleEdit = (doc) => {
    setIsEdit(false);
    setSelectedItem(doc);
  };

  // call to go back to main modal
  const handleBack = async () => {
    setIsEdit(true);
  };

  //call when did mount or on update
  useEffect(() => {
    fetchMenu();
  }, []);

  //table header
  const columns = [
    "Name",
    "Description",
    "Category",
    "Price",
    "Size",
    "Stock",
    props.action !== "View" && "Action",
  ];
  
  return (
    <>
      <ModalContent
        data={selectedItem}
        action={props.action}
        isEdit={isEdit}
        handleClose={handleBack}
      />
      <Paper
        sx={{ width: "100%", overflow: "hidden", display: isEdit || "none" }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {menu.map((column) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={column.id}>
                    <TableCell>{column.name}</TableCell>
                    <TableCell>{column.description}</TableCell>
                    <TableCell>{column.category}</TableCell>
                    <TableCell>{column.price.toFixed(2)}</TableCell>
                    <TableCell>{column.size}</TableCell>
                    <TableCell>{column.stock}</TableCell>
                    {props.action !== "View" && (
                      <TableCell>
                        <Stack direction="row" spacing={2}>
                          {props.action === "Delete" && (
                            <Button
                              color="error"
                              onClick={() => handleDelete(column)}
                            >
                              <DeleteIcon />
                              Delete
                            </Button>
                          )}
                          {props.action === "Edit" && (
                            <Button
                              color="success"
                              onClick={() => handleEdit(column)}
                            >
                              <EditIcon />
                              Edit
                            </Button>
                          )}
                        </Stack>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Stack direction="row" spacing={2} mt={10} justifyContent="flex-end">
        <Button
          size="large"
          variant="outlined"
          onClick={props.handleClose}
          color="error"
        >
          Close
        </Button>
      </Stack>
    </>
  );
}
