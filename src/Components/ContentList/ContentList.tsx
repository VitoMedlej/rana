"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton'
import { Paper, Typography } from '@mui/material';
import useLanguage from '@/Hooks/UseLanguage';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';





export default function BasicList({method,summaryContent,  trainer,secondaryTitle }:{
  trainer ?: any,
  method ?: {en:string,ar?:string},
  summaryContent :{en:string,ar?:string},
  secondaryTitle: {en:string,ar?:string}}) {
  const {text} = useLanguage()
  
  return (
    <Box sx={{ mt:4,mx:1,  maxWidth: '900px', bgcolor: 'background.paper' }}>
   <Typography  sx={{mx:1
              ,              direction:text('ltr','rtl'),

    
    fontWeight:'600',pb:1,fontSize:'2.5em'}}>
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
                method &&    <Typography sx={{
              direction:text('ltr','rtl'),
    
                  mx:1,color:'black'}}>
 
 
 {text('Method:','الطريقة')}
  {' '}{
                  `${text(`${method.en}`,method?.ar)}`
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

{/* <Test/> */}
{/* <Typography className='' sx={{
                      direction:text('ltr','rtl'),

  
  whiteSpace:'pre-line',px:2,py:3,fontWeight:'400'}} >
             <> {
               text(summaryContent.en,summaryContent?.ar)
               }</>
    
            
              </Typography> */}

<Box className='' sx={{
                      direction:text('ltr','rtl'),

  
  whiteSpace:'pre-line !important',px:2,py:3,fontWeight:'400'}} >
             <> 
      <ReactMarkdown className="markdown "  rehypePlugins={[rehypeRaw]}>{`${text(summaryContent.en,summaryContent?.ar)}`}</ReactMarkdown>
      <style jsx>{`
      .markdown {
        white-space: pre-line;
      }
      .markdown u {
        text-decoration: underline;
      }
    `}
              
                </style>
               </>
    
            
              </Box>
     
              {/* <Typography className='' sx={{
  direction:text('ltr','rtl'),
  whiteSpace:'pre-line',px:2,py:3,fontWeight:'400'}} >
  <ReactMarkdown>
    {
      text(summaryContent.en,summaryContent?.ar).split('\n').map((line, index) => 
      line.includes('Program of the course:')   ? `<u>${line}</u>` : line
      ).join('\n')
    }
  </ReactMarkdown>
</Typography> */}


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
