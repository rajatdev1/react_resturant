import React from 'react'
import {Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center", bgcolor:"#1a1a19",color:"white" ,p:3}}>

      <Box sx={{my: 3,
      '& svg':{
        fontSize:"60px",
        cursor:"pointer",
        mr:2,
        
      },
      // "& svg:hover":{color:"goldenrod"}

      }}>
      <InstagramIcon  sx={{ ":hover": { color: "#E4405F", transform:"translateX(5px)"}}} />
      <TwitterIcon sx={{ ":hover": { color: "#00acee", transform:"translateX(5px)"}}} />
      <GitHubIcon sx={{ ":hover": { color: "#51182b", transform:"translateX(5px)"}}}  />
      <FacebookIcon sx={{ ":hover": { color: "#3b5998", transform:"translateX(5px)"}}}  />
      </Box>

        <Typography variant='h5' 
        sx={{"@media (max-width:600px)":{
            fontSize: "1rem"
        }}}>
            All Right Reserver &copy; Rajatdev Restro
        </Typography>
    </Box>
    </>
  )
}

export default Footer