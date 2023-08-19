"use client";
import { Button } from '@mui/material'
import React from 'react'

let style1 = {
    color: 'white !important',
    background: '  #720400',
    border:'1px solid  #720400',
    borderRadius:'0 !important',

    
    ':hover': {
        background: ' #720400',
        color:'white !important',
    border:'1px solid  #720400'

    },
    display: 'flex',

    py: 1.22,
    px: 2.52,
    fontSize: '12px'
}
let style2 = {
    color: 'black',
  
    display: 'flex',
    fontWeight:'700',
    bordeRadius:25,
    my:1,
    py: 1.22,
    px: 2.52,
    borderRadius:'0 !important',
  
    ':hover':{  borderColor: 'black'},
    fontSize: '10px',
    
    border:'1.1px solid  '
}

const Btn = ({v2,disabled,onClick,className,submit,children,sx}:{submit?:boolean,className?:string,disabled?:boolean,onClick?:()=>void,sx?:any,v2?:boolean,children?:any}) => {
  return (
    <Button
    type={submit ? 'submit' : 'button'}
    className={`trans ${className ? className : ''}`}
    disabled={disabled || false}
    onClick={onClick &&onClick}
    sx={v2 ? {...style2 , ...sx} : {...style1 , ...sx} }>{children}</Button>
  )
}

export default Btn