import React, { useEffect, useState } from 'react'

import {YOUTUBE_API_URL} from "../utils/constants"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);

  const getVideos = async ()=>{
    const p = await fetch(YOUTUBE_API_URL);
    const json = await p.json();
    setVideos(json.items);
  }

  useEffect(()=>{
    getVideos();

  },[])
  if (videos.length === 0) return null;
  return (
    <div className="flex flex-wrap">
      {videos.map(video => 
      (
        <Link to={"/watch?v=" + video.id}>
        <VideoCard key={video.id} info={video}/>
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer