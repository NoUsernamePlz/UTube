import React from 'react';
import {useState,useEffect} from 'react';
import {Box,Stack,Typography} from '@mui/material';
import  {Sidebar,Videos}  from './';
import {FetchApiData} from '../utils/FetchApiData';


const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState('New');
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
   FetchApiData(`search?part=snippet&q=${selectedCategory}`)
   .then((data)=>setVideos(data.items))
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:
    "column",md:"row"
    }}}>
       <Box sx={{ height: { xs:'auto', md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright'
     variant='body2' sx={{mt:1.5,color:'#fff'}}
     >
      @copyright
     </Typography>
       
       </Box>

       <Box p={2} sx={{overflow:'auto',
      height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight="bold"
        mb={2} sx={{
          color:'white'
        }}
        >
         {selectedCategory} 
          <span style={{color:'#F32503'}}>
            Videos
          </span>
        </Typography>

        <Videos videos={videos}/>
       </Box>
      
     
    </Stack>
  )
}

export default Feed