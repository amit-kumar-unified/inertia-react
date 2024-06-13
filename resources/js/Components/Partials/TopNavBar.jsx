import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FaBars } from 'react-icons/fa6';
import { usePage } from '@inertiajs/react';
import { Avatar } from '@mui/material';


const stringAvatar = (fullName) => {
    if(!fullName){
        return "+";
    }

    let nameSplit = fullName.split(" ");

    return nameSplit[0][0];
}

const TopNavBar = () => {

  const { app, auth } = usePage().props;


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ background: "#fff"}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <FaBars color="#000" />
        </IconButton>
        <Typography color="#000" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {app.name}
        </Typography>


        <Avatar sx={{ bgcolor: "#075A96" }}>{ stringAvatar(auth.user.check && auth.user.name) }</Avatar>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default TopNavBar;
