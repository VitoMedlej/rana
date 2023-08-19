"use client"
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Title from '../Title'
import Btn from '../Btn/Btn'

const Index = () => {
  return (
    <Grid sx={{py:8}} container>
        <Grid className='flex center items-center' item xs={12} sm={6}>
            <Box>
            <Title sx={{}}>
            BROWESE OUR LATEST COURSES
                </Title>
                <Typography sx={{mx:1,mt:1}}>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore laudantium iusto excepturi! Recusandae sunt reprehenderit autem suscipit, repellat quibusdam eligendi sed quod. Velit, quam sit!
                </Typography>
                <Btn sx={{mx:1,my:3}}>
                    REGISTER NOW
                </Btn>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box sx={{height:'500px'}}>
                <img src="https://th.bing.com/th/id/R.55bc18ffe02d3f792ec0f434751f31f5?rik=Pj7ndBZtEZ0g3g&riu=http%3a%2f%2fsiddhartha.co.in%2fblog%2fwp-content%2fuploads%2f2020%2f10%2fBecome-a-Civil-Engineer.jpg&ehk=tnWnN%2fJrUKJ7pBI5POERYt2gnDUMo6rnB%2bId6OTHmaQ%3d&risl=&pid=ImgRaw&r=0" alt="" className="img" />
            </Box>
        </Grid>
    </Grid>
  )
}

export default Index