import { Box, Card, Modal } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import MenuCard from "./MenuCard";
import ModalContent from "./ModalContent/ModalContent";
import ModalTable from "./ModalContent/ModalTable";

export default function MenuModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <MenuCard
        title={props.title}
        description={props.description}
        onClick={handleOpen}
        gif={props.gif}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal_container">
          <Card className="header_main">DE BILBAO</Card>
          <Container className="modal_form">
            {props.action === "Create" ? (
              <ModalContent
                handleClose={handleClose}
                action={props.action}
                isEdit={false}
              />
            ) : (
              <ModalTable handleClose={handleClose} action={props.action} />
            )}
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
