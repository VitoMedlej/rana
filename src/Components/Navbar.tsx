"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState} from 'react';
import Link from 'next/link';
import {Badge, Divider, Typography} from '@mui/material';
import {useRouter} from 'next/navigation';
import {IoBagOutline ,IoMenuOutline} from 'react-icons/io5'
import { useCartContext, useDrawerContext } from '@/context/Context';
import NavBottom from './Sidebar/NavBottom';
import Btn from './Btn/Btn';






export default function Navbar() {
    const {open, setOpen} = useDrawerContext();



    const router = useRouter()



    return ( <> <Box
    className='center auto  bg flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',

        background:'white',
        border: 'none',
        position : 'relative !important',
        flexGrow: 1
    }}>
      
        <AppBar
    className='center relative  flex'

            sx={{


                background:'white',
            // maxWidth: 'lg',
            position:'relative',
            boxShadow:'1px 1px 3px #00000017',
            margin: '0 auto',
        }}>
            <Toolbar
    className='center  flex w100  auto'

                sx={{
                    
                    // border : `1px solid #00000012`,
                background:'white',
            boxShadow:'1px 1px 3px #00000017',
                    width:'100%',
                    justifyCotntent:'space-between !important',
                    maxWidth:'xl',
            position:'relative',

                px:'0 !important',
                flexWrap: 'wrap'
            }}> 
                

               
            

               
                <Link className='flex center  aling-center ' style={{ justifyContent:'flex-start !important'}}  href='/' color='inherit'>

<Box
    sx={{
        
    mx: {
        sm: '1em'
    },
   
    width:{xs:'90px',sm: '100px'}
}}>
    <img
        className='img'
        src={`https://ucarecdn.com/662aba9b-005a-4bb8-a4a1-c939111c8898/275633496_1156231295147805_2239147006843652299_n.jpg`}
        alt="gifts.and.more_lb Lebanon logo"/>
</Box>
</Link>

    <NavBottom/>

                <Box
                    sx={{
                    px:1,
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flexWrap: 'wrap',
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
 

                   
 <Btn v2 sx={{mr:2}}>
                            Register
                        </Btn>

                     
<IconButton
                            onClick={() => setOpen(!open)}
                            edge="start"
                            aria-label="menu"
                            sx={{
                                display:{xs:'flex',md:'none'},
                            margin:0,
                            color: 'black',
                         
                        }}>
                            <IoMenuOutline color='black'/>
                  

                        </IconButton> 
                      
                    
                    </Box>

                </Box>
          
             
            </Toolbar>
        </AppBar>
    </Box> 

    {/* < Divider sx={{color : '#00000017'}} /> */}
     </>
    
    );
}