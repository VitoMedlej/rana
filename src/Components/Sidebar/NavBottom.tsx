"use client"
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { categories } from '../Sidebar/SideAccordion'
// import MenuHover from './MenuHover'



const NavBottom = () => {

  return (
    <Box
        className=' wrap  space-evenly'
        sx={{
            flex:1,
            position:'relative',
        // width: '100%',
        mx: 0,
        display : {xs:'none',md:'flex'}
    }}>
        <Container
            className='flex   '
            sx={{
                gap:{xs:2.5,sm:2.75,md:3},
            maxWidth: 'lg',
            overflow:'hidden',
            py:1.5,

        }}>
{/* <Link className=' decor-none uppercase' href={`/collection/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:400,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    Sale
                    </Typography>
                </Link> */}
                <Link  style={{color:'black'}}
                
                className=' decor-none black uppercase'  href={`/`}>
                    <Typography  component='p' sx={{width:'max-content',
                    fontWeight:500,fontSize:{xs:'.75em',sm:'.885em'}}}>
                   Home
                    </Typography>
                </Link>
            {categories.slice(0,6).map(i => {
                return <Link  style={{color:'black'}}
                
                className=' decor-none black uppercase' key={i} href={`/${i.toLocaleLowerCase().replace(/ /g, '-')}`}>
                    <Typography  component='p' sx={{width:'max-content',
                    fontWeight:500,fontSize:{xs:'.75em',sm:'.885em'}}}>
                    {i}
                    </Typography>
                </Link>
                // return  <MenuHover key={i} category={i} subcategories={['test','test2']}/>
            })}
        </Container>
        {/* <MenuHover category='HOVER HERE' subcategories={['test','test2']}/> */}
    </Box>
  )
}

export default NavBottom