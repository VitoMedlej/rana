"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton'
import { Paper, Typography } from '@mui/material';
import useLanguage from '@/Hooks/UseLanguage';






export default function BasicList({method,summaryContent,  trainer,secondaryTitle }:{
  trainer ?: any,
  method ?: any,
  summaryContent :{en:string,ar?:string},
  secondaryTitle: {en:string,ar?:string}}) {
  const {text} = useLanguage()

  return (
    <Box sx={{ mt:4,mx:1,  maxWidth: '900px', bgcolor: 'background.paper' }}>
   <Typography className='' sx={{mx:1,fontWeight:'600',pb:1,fontSize:'2.5em'}}>
               {
               text(secondaryTitle.en,secondaryTitle?.ar)
               }
               
              </Typography>
              {/* {
                trainer &&    <Typography sx={{mx:1,color:'black'}}>
 
 By {' '}{
                  `${trainer}`
                }
                </Typography> 
              } */}
               {
                method &&    <Typography sx={{mx:1,color:'black'}}>
 
 Method: {' '}{
                  `${method}`
                }
                </Typography> 
              }
      <Paper variant="outlined" sx={{mt:2}} aria-label="secondary mailbox folders">
        {/* <List>

        {
            summaryContent.map((item,index)=>{

            
     return     <ListItem key={typeof item === 'string' ? item: item?.title} >
            <ListItemButton>
            { typeof item === 'string' ? <Typography sx={{fontWeight:'400'}} >
             <strong>{item }</strong>
    
            
              </Typography>
              :

              <Box  >
             <Typography sx={{fontWeight:'400'}}>

             <strong>{ text( item?.title,item?.titleAr)    }</strong>
             </Typography>
              
           
            
              </Box>
            }
            </ListItemButton>
          </ListItem>
        })
    }
        </List> */}

<Typography className='pre' sx={{px:2,py:3,fontWeight:'400'}} >
             <strong> {
               text(summaryContent.en,summaryContent?.ar)
               }</strong>
    
            
              </Typography>
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
