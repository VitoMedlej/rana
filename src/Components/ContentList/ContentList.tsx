"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Paper, Typography } from '@mui/material';
import Title from '../Title';






export default function BasicList({summaryContent}:{summaryContent:string[]}) {
  return (
    <Box sx={{ mt:4,mx:1,  maxWidth: '900px', bgcolor: 'background.paper' }}>
   <Typography className='clr' sx={{mx:1,fontWeight:'600',pb:1,fontSize:'.98em'}}>
                Course Content Sumamry:
              </Typography>
      <Paper variant="outlined" aria-label="secondary mailbox folders">
        <List>

        {
            summaryContent.map((item,index)=>{

            
     return     <ListItem key={item} >
            <ListItemButton>
              <Typography sx={{fontWeight:'400'}} >
              0{index + 1}- {' '} {' '}<strong>{item}</strong>
              </Typography>
            </ListItemButton>
          </ListItem>
        })
    }
        </List>
      </Paper>
    {/* <Box sx={{my:8}}>

      <Title >
        About This Course
      </Title>
      <Typography sx={{mx:1}}>
      Embark on an immersive journey through our Essentials of Interior Design Workshop and unlock the secrets to creating captivating and functional spaces. This comprehensive workshop covers all aspects of interior design, from space planning and furniture arrangement to color psychology and lighting techniques.
      </Typography>
    </Box> */}

    </Box>
  );
}
