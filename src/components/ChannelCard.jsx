import React from 'react';
import {Box,CardContent,CardMedia,Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';



const ChannelCard = ({channeldDetail,marginTop}) => {
  return (
    <Box
    sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{   xs:'100%', sm:'358px',md:'320px'},
        height:'326px',
        margin:'auto',
        marginTop:{marginTop},
    }}
    >
       <Link to={`/channel/${channeldDetail?.id?.channelId}`}>
       <CardContent sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        color:'#fff'
       }}>
        <CardMedia
        image={channeldDetail?.snippet?.thumbnails?.
        high?.url || demoProfilePicture }
        alt={channeldDetail?.snippet?.title}
        sx={{borderRadius:'50%', height:'180px',
        width:'180px',mb:2,border:'1px solid #e3e3e3'
    }}
        />
        <Typography variant='h6'>
        {channeldDetail?.snippet?.title}
        <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
        </Typography>
        {channeldDetail?.statistics?.
        subscriberCount && (
            <Typography>
                {parseInt(channeldDetail?.statistics?.subscriberCount)
                .toLocaleString()}Subscribers
            </Typography>
        )
        }

       </CardContent>


       </Link>


    </Box>
  )
}

export default ChannelCard