import React from 'react'

const VideoCard = ({info}) => {
  const {snippet} = info;
  const {title, channelTitle, thumbnails} = snippet;
  return (
    <div className="flex flex-row w-screen mb-5">
      <img src={thumbnails.medium.url} alt="thumbnail"/>
      <div>
      <h1>{title}</h1>
      <h2 className="text-sm">{channelTitle}</h2>
      </div>
    </div>
  )
}

export default VideoCard