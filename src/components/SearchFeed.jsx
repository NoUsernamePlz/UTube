
import React from 'react';
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import {Box,Typography} from '@mui/material';
import  {Videos}  from './';
import {FetchApiData} from '../utils/FetchApiData';


const SearchFeed = () => {
  const [videos,setVideos]=useState([]);
  const {searchTerm} = useParams();
  useEffect(()=>{
   FetchApiData(`search?part=snippet&q=${searchTerm}`)
   .then((data)=>setVideos(data.items))
  },[searchTerm]);

  return (

       <Box p={2} sx={{overflowY:'auto',
      height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight="bold"
        mb={2} sx={{
          color:'white'
        }}
        >
       search results for:
          <span style={{color:'#F32503'}}>
           {searchTerm}
          </span> videos
        </Typography>

        <Videos videos={videos}/>
       </Box>
  )
}

export default SearchFeed