import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import './App.css';
import { getCategories } from './firestore/firestoreQueries';
import MenuCard from './components/MenuCard'
import {Typography} from '@mui/material';
import MenuModal from './components/MenuModal';


function App() {
  return (
   <Container className="main_container">
    <Typography variant="h2" className='header_name'>De Bilbao</Typography>
    <Container className="sub_container">
      <MenuModal title="Create"  description="Add items in your menu"    action="Create"/>
      <MenuModal title="View"    description="View items in your menu"   action="View" />
      <MenuModal title="Edit"    description="Edit items in your menu"   action="Edit" />
      <MenuModal title="Delete"  description="Delete items in your menu" action="Delete" />
    </Container>
   </Container>
  );
}

export default App;
