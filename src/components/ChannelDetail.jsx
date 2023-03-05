import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from "./"
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {

  const[channelDetail, setChannelDetail] = useState(null);
  const[videos, setVideos] = useState([]);

  const{id} = useParams();
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=> setChannelDetail(data?.items[0]));
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=> setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: "linear-gradient(90deg, rgba(5,24,38,1) 18%, rgba(47,94,227,1) 47%, rgba(25,35,166,1) 78%, rgba(17,14,93,1) 100%, rgba(118,182,195,1) 100%)",
          zIndex:10,
          height:"300px"
        }}
        />
        <ChannelCard
          channelDetail={channelDetail}
          marginTop="-110px"
        />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm: "100px"}}}/>
          <Videos 
            videos={videos}
          />
      </Box>
    </Box>
  )
}

export default ChannelDetail
