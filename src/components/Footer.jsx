import React from 'react'
import { Box,Stack,Typography } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material/';

const Footer = () => {
  return (
    <Box position={'sticky'}>
<Stack direction={'column'}>
    <Typography varient={'h6'} color="#fff">
        Contact US:
    </Typography>
    <Stack direction={'row'} color="#fff">
    
        <GitHub/>
    

        <LinkedIn/>
   
    </Stack>

</Stack>

    </Box>
  )
}

export default Footer