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

import dashboard from './Components/Images/dashboard (2).svg'
import project from './Components/Images/priority (1).svg'
import member from './Components/Images/peoples.svg'
import setting from './Components/Images/settings (1).svg'
import calendars from './Components/Images/calendar (1).svg'
import { People } from '@mui/icons-material';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (


    <div>

    <div>
      <div style={{ backgroundColor: " rgba(120, 136, 255, 0.938);" }}>
        <AppBar position="fixed" className='appbars'>
          <Toolbar className='appbar'>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <div className='logos'>
              <h5>HR Tool</h5>

              <div >
              <TextField id="standard-basic" placeholder=' Search' variant="standard" className='searchs' />
              </div>

              <div >
                <img src={ userLogo } style={{height:'40px'}}/>
               
              </div>
              <div>
              <Typography  variant='h8' className='Usernames'>Username</Typography >
              </div>
            </div>
 
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={open} onClose={toggleDrawer}>

          <div className='leftcontents'>

            <Link className='lnks1' to='/Dash'><Button variant='text' ><img src={dashboard} className='dashlogo'></img><span className='dash-text01'>DASHBOARD</span></Button></Link>
            <Link className='lnks2' to='/project'><Button variant='text' ><img src={project} className='dashlogo'></img><span className='dash-text01'>PROJECT</span></Button></Link>
            <Link className='lnks3' to='/members'><Button variant='text'> <img src={member} className='dashlogo'></img><span className='dash-text01'>MEMBER</span></Button></Link>
            <Link className='lnks4'><Button variant='text' ><img src={calendars} className='dashlogo'></img><span className='dash-text01'>CALENDAR</span></Button></Link>
            <Link className='lnks5'><Button variant='text' ><img src={setting} className='dashlogo'></img><span className='dash-text01'>SETTINGS</span></Button></Link>

            <div className='logouts'>
              <Link className='lnks1' to='/'><Button variant='text' style={{}}>LOG OUT</Button></Link>
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