import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Drawer, List, ListItem, ListItemText, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import userLogo from './Components/Images/user.png';
import Project from './Components/Project';
import Members from './Components/Members';
import Login from './Components/Login';
import Sign from './Components/Sign';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (


    <div>

    <div>
      <div style={{ backgroundColor: " rgba(120, 136, 255, 0.938);" }}>
        <AppBar position="fixed" className='appbar'>
          <Toolbar className='appbar'>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <div className='logo'>
              <h5>HR Tool</h5>

              <div >
              <TextField id="standard-basic" placeholder=' Search' variant="standard" className='search' />
              </div>

              <div >
                <img src={ userLogo } style={{height:'40px'}}/>
               
              </div>
              <div>
              <Typography  variant='h8' className='Username'>Username</Typography >
              </div>
            </div>
 
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={open} onClose={toggleDrawer}>

          <div className='leftcontent'>

            <Link className='lnk1' to='/Dash'><Button variant='text' style={{ width: '40px'}}>DASHBOARD</Button></Link>
            <Link className='lnk1' to='/project'><Button variant='text' style={{ width: '40px' }}>PROJECT</Button></Link>
            <Link className='lnk1' to='/members'><Button variant='text' style={{ width: '40px' }}>MEMBER</Button></Link>
            <Link className='lnk1'><Button variant='text' style={{ width: '40px' }}>CALENDAR</Button></Link>
            <Link className='lnk1'><Button variant='text' style={{ width: '40px' }}>SETTINGS</Button></Link>

            <div className='logout'>
              <Link className='lnk1' to='/'><Button variant='text' style={{}}>LOG OUT</Button></Link>
            </div>
          </div>

        </Drawer>

        <div style={{ marginLeft: open ? 240 : 0, padding: '20px', width: '100%' }}>
        </div>
      </div>    
   </div>

    </div>
  );
}

export default Navbar;