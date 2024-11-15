import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const dispatch = useDispatch();
    let [searchParams] = useSearchParams();
    useEffect(() => {
        dispatch(closeMenu());
    })


    return (
        <div className="m-5 w-full">
            <div className="flex w-full">
                <div>
            <iframe 
            width="800" 
            height="400" 
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
            >
            </iframe>
            </div>

            <div className="w-full">
                <LiveChat/>
            </div>
            </div>
            
            <div>
            <CommentsContainer/>
            </div>
        </div>
    )
}

export default WatchPage