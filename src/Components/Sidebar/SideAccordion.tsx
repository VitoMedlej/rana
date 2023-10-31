"use client";
import * as React from 'react';
import { Box , AccordionDetails , AccordionSummary , Accordion ,Typography, ListItem, ListItemButton, ListItemIcon, ListItemText, List, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';




export const categories = [
'Courses',
'About Us'
];

export default function BasicAccordion({toggleDrawer} : any) {
  const router = useRouter();

  return (
    <Box sx={{zIndex:241241241}}>
      <List>

       <ListItem 
          onClick={()=>{
            toggleDrawer(false)
            router.push(`/`)
           }}
           disablePadding>
            <ListItemButton sx={{py:1 ,  fontWeight:'600 !important',}}>
           
              <ListItemText
              sx={{
                color:'black',
                fontWeight:'600 !important',
                textTransform: 'capitalize'
              }}
            >
                    <Typography sx={{fontWeight:600}}>Home</Typography>
              </ListItemText>
                    <Divider></Divider>
            </ListItemButton>
          </ListItem>



          <ListItem 
          onClick={()=>{
            toggleDrawer(false)
            router.push(`/about-us`)
           }}
           disablePadding>
            <ListItemButton sx={{py:1 ,  fontWeight:'600 !important',}}>
           
              <ListItemText
              sx={{
                color:'black',
                fontWeight:'600 !important',
                textTransform: 'capitalize'
              }}
            >
                    <Typography sx={{fontWeight:600}}>About Us</Typography>
              </ListItemText>
                    <Divider></Divider>
            </ListItemButton>
          </ListItem>

          <ListItem 
          onClick={()=>{
            toggleDrawer(false)
            router.push(`#why-us`)
           }}
           disablePadding>
            <ListItemButton sx={{py:1 ,  fontWeight:'600 !important',}}>
           
              <ListItemText
              sx={{
                color:'black',
                fontWeight:'600 !important',
                textTransform: 'capitalize'
              }}
            >
                    <Typography sx={{fontWeight:600}}>Why Us</Typography>
              </ListItemText>
                    <Divider></Divider>
            </ListItemButton>
          </ListItem>

          <ListItem 
          onClick={()=>{
            toggleDrawer(false)
            router.push(`#contact`)
           }}
           disablePadding>
            <ListItemButton sx={{py:1 ,  fontWeight:'600 !important',}}>
           
              <ListItemText
              sx={{
                color:'black',
                fontWeight:'600 !important',
                textTransform: 'capitalize'
              }}
            >
                    <Typography sx={{fontWeight:600}}>Contact</Typography>
              </ListItemText>
                    <Divider></Divider>
            </ListItemButton>
          </ListItem>


          </List>


    </Box>
  );
}