"use client"
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { categories } from '../Sidebar/SideAccordion'
// import MenuHover from './MenuHover'



const NavBottom = () => {

  return (
    <Box
        className=' wrap   end'
        sx={{
            justifyContent:'flex-end'
            ,flex:1,
            position:'relative',
        // width: '100%',
        mx: 0,
        display : {xs:'none',md:'flex'}
    }}>
        <Container
            className='flex   end'
            sx={{
            justifyContent:'flex-end'
,
                gap:{xs:2.5,sm:2.75,md:5},
            maxWidth: 'lg',
            overflow:'hidden',
            py:1.5,
          
        }}>
{/* <Link className=' decor-none ' href={`/collection/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:400,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    Sale
                    </Typography>
                </Link> */}
                <Link  style={{color:'#1865f2 !important'}}
                
                className=' decor-none #1865f2 !important '  href={`/`}>
                    <Typography  component='p' sx={{width:'max-content',
                    fontWeight:700,fontSize:{xs:'.75em',sm:'.95em'}}}>
                   Home
                    </Typography>
                </Link>
                <Link  style={{ margin:'0 .25em',color:'#1865f2 !important'}}
                
                className=' decor-none #1865f2 !important '  href={`/services`}>
                    <Typography  component='p' sx={{width:'max-content',
                    fontWeight:700,fontSize:{xs:'.75em',sm:'.95em'}}}>
                   Services
                    </Typography>
                </Link>
                <Link  style={{ margin:'0 .25em',color:'#1865f2 !important'}}
                
                className=' decor-none #1865f2 !important '  href={`/about-us`}>
                    <Typography  component='p' sx={{width:'max-content',
                    fontWeight:700,fontSize:{xs:'.75em',sm:'.95em'}}}>
                   About Us
                    </Typography>
                </Link>
                <Link  style={{color:'#1865f2 !important'}}
                
                className=' decor-none #1865f2 !important '  href={`#testimonials`}>
                    <Typography  component='p' sx={{width:'max-content',
                    fontWeight:700,fontSize:{xs:'.75em',sm:'.95em'}}}>
                  Reach Us
                    </Typography>
                </Link>
           
        </Container>
        {/* <MenuHover category='HOVER HERE' subcategories={['test','test2']}/> */}
    </Box>
  )
}

export default NavBottom