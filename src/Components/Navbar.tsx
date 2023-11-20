"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {IoBagOutline ,IoMenuOutline} from 'react-icons/io5'
import { useDrawerContext, useLangContext } from '@/context/Context';
import NavBottom from './Sidebar/NavBottom';
import Btn from './Btn/Btn';
import SearchModal from './Sidebar/searchModal';
import { useState } from 'react';
import SearchInput from './Sidebar/SearchInput';
import { Typography } from '@mui/material';
import useLanguage from '@/Hooks/UseLanguage';






export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,setOpenModal] = useState(false)
    const {text} = useLanguage()
    const {lang,setLang} = useLangContext()
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
                    py:1,
                    // border : `1px solid #00000012`,
                background:'white',
            boxShadow:'none',
                    width:'100%',
                    justifyCotntent:'space-between !important',
                    maxWidth:'lg',
            position:'relative',

                px:'0 !important',
                flexWrap: 'wrap'
            }}> 
            <Box sx={{
                    justifyCotntent:'space-between  !important',

            }} className="flex items-center align-center">

            <SearchInput/>
                
                
                
                    <Typography 
                    
                className='gap gap1 cursor pointer decor-none black uppercase'  
                  onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                    component='p' sx={{width:'max-content',
                    
                    color:'#1865f2 !important',
                    fontWeight:700,ml:1,fontSize:{xs:'.75em',sm:'.885em'}}}>
                   
                   {
                    text('العربية','English')
                   }
                    </Typography>
            </Box>
               
            {/* <SearchModal openModal={openModal} setOpenModal={setOpenModal} /> */}
               
                <Link 
                className='flex center absolute cursor pointer   aling-center '
                 style={{zIndex:12354, justifyContent:'flex-start !important'}}  href='/' 
                 color='inherit'>

<Box
className='cursor pointer'
    sx={{
    zIndex:134124,        
    mx: {
        sm: '1em'
    },
    height : '60px',
    width:{xs:'90px',sm: '100px'}
}}>
    <img
    style={{zIndex:134124}}
        className='img cover'
        src={`https://ucarecdn.com/a8fde0d5-772c-4818-acab-95b78a1b58c9/iatt.jfif`}
        alt="IATT logo"/>
</Box>
</Link>
<Box sx={{  flex:1,   justifyContent:'flex-end',
                                display:{xs:'flex',md:'none'},}}>

<IconButton
                            onClick={() => setOpen(!open)}
                            edge="start"
                            aria-label="menu"
                            sx={{
                              
                             
                            margin:0,
                            color: 'black',
                         
                        }}>
                            <IoMenuOutline color='black'/>
                  

                        </IconButton> 
</Box>

    <NavBottom/>

                {/* <Box
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
 

                   
 <Btn 
 onClick={()=>router.push('/#register')}
 v2 sx={{mr:2}}>
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
           */}
             
            </Toolbar>
        </AppBar>
    </Box> 

    {/* < Divider sx={{color : '#00000017'}} /> */}
     </>
    
    );
}