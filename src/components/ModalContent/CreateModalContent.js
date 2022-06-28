import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { addMenu, getCategories, getSizes } from '../../firestore/firestoreQueries';

export default function CreateModalContent(props) {
    const [form, setForm] = useState({});
    const [categories, setCategories] = useState([]);
    const [sizes, setSizes] = useState([]);

    // call when fetching categories data
    const onCategoriesUpdate = async (query) => {
      let catArray = []
      query.forEach(docs => {
        catArray.push(docs.data())
        setCategories(catArray);
      });
    }

    // call when fetching sizes data
    const onSizesUpdate = async (query) => {
        let sizesArray = []
        query.forEach(docs => {
            sizesArray.push(docs.data())
            setSizes(sizesArray);
        });
        }
  
    // get the categories data
    const fetchCategories = async () => {
      await getCategories(onCategoriesUpdate)
    }

    // get the sizes data
    const fecthSizes = async () => {
        await getSizes(onSizesUpdate)
    }

    //call when did mount and on update
    useEffect(() => {
      fetchCategories()
      fecthSizes()
    }, []);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = name === "price" || name === "stock" ? Number(e.target.value) : e.target.value;
        setForm({
            ...form,
            [name] : value
        })
    }

    const saveMenu = async ()  => {
        await addMenu(form).then(()=>{
            props.handleClose()
            Swal.fire(
                'Success!',
                'You have added a new item in your menu!',
                'success'
              )
        })
    }

    return (
        <>
            <Stack spacing={2}>
                <TextField  onChange={handleChange} name="name" label="Name" variant="outlined" />
                <TextField  onChange={handleChange} name="description" label="Description" variant="outlined" />
                <FormControl fullWidth>
                    <InputLabel >Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        name="category"
                        value={form.category}
                        label="Category"
                        onChange={handleChange}
                    >
                        {
                            categories.map(cat => {
                                return(
                                    <MenuItem value={cat.category}>{cat.category}</MenuItem>
                                )
                            })
                        }
                        
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>Size</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        name="size"
                        value={form.size}
                        label="Size"
                        onChange={handleChange}
                    >
                       {
                            sizes.map(prod => {
                                return(
                                    <MenuItem value={prod.size}>{prod.size}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
                <TextField  onChange={handleChange} name="price" label="Price" variant="outlined" type="number" />
                <TextField  onChange={handleChange} name="stock" label="Stock" variant="outlined" type="number" />
            </Stack>
            <Stack direction="row" spacing={2} mt={10} justifyContent="flex-end">
                <Button size="large" variant="outlined" onClick={props.handleClose} color="error">Cancel</Button>
                <Button size="large" variant="outlined" onClick={saveMenu}>{props.action}</Button>
            </Stack>
        </>

    )
}
