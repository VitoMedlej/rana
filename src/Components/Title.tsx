import { Typography } from '@mui/material'
import React from 'react'

const Title = ({children,sx}:{sx?:any,children:any}) => {
  return (
    <Typography sx={{my:1,fontSize:{xs:'2em',sm:'2.5em'},fontWeight:600,px:1,...sx}}>{children}</Typography>
  )
}

export default Title