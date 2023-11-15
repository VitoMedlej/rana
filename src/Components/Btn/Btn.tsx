"use client";
import { Button } from '@mui/material'
import React from 'react'

let style1 = {
    color: 'white !important',
    background: '#1865f2',
    border:'1px solid  #1865f2',
    borderRadius:'4px !important',

    
    ':hover': {
        background: ' #1865f2',
        color:'white !important',
    border:'1px solid  #1865f2'

    },
    display: 'flex',

    py: 1.12,
    px: 5.52,
    fontSize: '13px'
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