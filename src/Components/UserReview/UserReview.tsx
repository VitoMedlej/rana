
import {Box, Typography} from '@mui/material'
import React from 'react'

const UserReview = ({title,reviewer,description}:{title:string,reviewer:string,description:string}) => {
    return (
        <Box
        className='auto flex center col '
            sx={{

                boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
                px:2,
                maxWidth:'500px',
                height:'400px',
                borderBottom: '1px solid white'
        }}>

            <Box className="flex">
            


            </Box>
<Box sx={{width:'30px',pt:4}}>
<img src="https://th.bing.com/th?id=OIP.8LegDUCAK5g--j14si2V3wHaF0&w=282&h=221&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" className="img contain" />

</Box>
            <Typography
            // className='clr'
                sx={{
                    // color:'#f8f8f8',
                fontWeight: 500,
                    maxWidth:'500px',
                pt: 1,
                fontSize: 17
            }}
                component={'p'}>{description}</Typography>
                 <Typography
            className='clr'
                sx={{
                    // color:'#f8f8f8',
                    fontStyle:'italic',
                fontWeight: 400,
                    maxWidth:'500px',
                pt: 4,
                pb:8,
                fontSize: 15
            }}
                component={'p'}>-{reviewer}</Typography>


        </Box>
    )
}

export default UserReview