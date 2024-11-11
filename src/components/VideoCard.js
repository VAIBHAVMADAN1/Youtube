import React from 'react'

const VideoCard = ({info}) => {
  const {snippet,statistics} = info;
  const {title, channelTitle, thumbnails} = snippet;
  return (
    <div className="max-w-64 max-h-64 m-2 shadow-md">
      <img src={thumbnails.medium.url} alt="thumbnail"/>
      <h1>{title}</h1>
      <h2 className="text-sm">{channelTitle}</h2>
      <h3 className="text-xs">{statistics.viewCount} views</h3>
    </div>
  )
}

export default VideoCard