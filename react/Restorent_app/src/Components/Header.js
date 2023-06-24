import React,{useState} from 'react';
import {Box,AppBar,Typography,Toolbar,IconButton,Drawer, Divider} from '@mui/material';
import {Link} from 'react-router-dom';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import '../Style/Headerstyle.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const[mobileopen,setMobileopen] = useState(false)
  // handle menu click

  const handleDrawerToggle=()=>{
    setMobileopen(!mobileopen)
  }
  //menu drawer

  const drawer = (
    <box onClick={handleDrawerToggle} sx={{ textAlign: "center"}}>
       <Typography color={"goldenrod"} variant='h5' component='div' sx={{flexGrow:1, mx:4,my:2}}>
        <FoodBankIcon></FoodBankIcon>
        My Restorent
      </Typography>
      <Divider />
      
        <ul className='mobile-navigation'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>

          <li>
            <Link to={'/About'}>About us</Link>
          </li>

          <li>
            <Link to={'/Menu'}>Menu</Link>
          </li>

          <li>
            <Link to={'/Contact'}>Contact</Link>
          </li>
        </ul>
     
    </box>
  )
  return (
    <>
   <Box>
    <AppBar component={"nav"} sx={{bgcolor:'black'}}>
      <Toolbar>
        <IconButton color="inherit" aria-lable='open-drawer' edge='start' sx={{
          mr: 2,
          display: {sm: "none"},
          }}
          onClick={handleDrawerToggle}
          >
           
         <MenuIcon />
        </IconButton>
      <Typography color={"goldenrod"} variant='h6' component='div' sx={{flexGrow:1}}>
        <FoodBankIcon></FoodBankIcon>
        My Restorent
      </Typography>
      

      <Box sx={{display: {xs:"none", sm:"block"}}}>
        <ul className='navigation-menu'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>

          <li>
            <Link to={'/About'}>About us</Link>
          </li>

          <li>
            <Link to={'/Menu'}>Menu</Link>
          </li>

          <li>
            <Link to={'/Contact'}>Contact</Link>
          </li>
        </ul>
      </Box>

      </Toolbar>
      
    </AppBar>

    <box component="nav">
     <Drawer variant="temporary" open={mobileopen} onClose={handleDrawerToggle}
     sx={{display:{xs:"block",sm:"none"},
     display: { xs: "block", sm: "none" },
     "& .MuiDrawer-paper": {
       boxSizing: "border-box",
       width: "240px",
     },
   }}
     >
      {drawer }
     </Drawer>
    </box>
    <Toolbar/>
   </Box>
    </>
  )
}

export default Header