import React, { useEffect, useRef, useState } from 'react'

import hamburger_icon from "../assets/hamburger.png"
import logo_icon from "../assets/logo.png";
import search_icon from "../assets/search.png"
import user_icon from "../assets/user.png"
import { YOUTUBE_SUGGESTIONS_API_URL } from '../utils/constants';

import { useDispatch, useSelector } from 'react-redux';

import { toggleMenu } from '../utils/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const dispatch = useDispatch();
    const cache = useSelector(store => store.search);
    function toggleMenuHandler() {
        dispatch(toggleMenu());
    }

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const getYoutubeSuggestions = async () => {
        // REQUIRES CORS
        console.log(searchQuery);
        setShowSuggestions(true);
        const p = await fetch(YOUTUBE_SUGGESTIONS_API_URL + searchQuery);
            const json = await p.json();
            setSuggestions(json[1]);
            dispatch(cacheResults({
                [searchQuery]: json[1]
            }))
    }

    useEffect(() => {
        if (searchQuery) {
            let timer;
            if (cache[searchQuery]) {
                setSuggestions(cache[searchQuery]);
            }
            else{
                timer = setTimeout(() => getYoutubeSuggestions(), 200);
            }
            return () => {
                if (timer) {
                    clearTimeout(timer);
                }  
            }
        }
    }, [searchQuery])

    /* 
    key - i
        -render the component
        -useEffect()
        - start timer-> make the api call after 200ms
    
    key - ip
        - destroy the component (useEffect return method)'
        - re-render the component
        - useEffect()
        - start timer-> mae the api call after 200ms
    */
    return (
        <div className="grid grid-flow-col m-5 pb-4 shadow-md">

            <div className="flex">
                <img onClick={toggleMenuHandler}
                    className="h-8 mr-2 cursor-pointer"
                    src={hamburger_icon} alt="Hamburger button" />

                <img className="h-8"
                    src={logo_icon} alt="Logo" />
            </div>

            <div
                className="col-span-4 flex flex-col h-8 relative">
                <div
                    className="flex flex-row w-full">
                    <input onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="border-black border rounded-l-md w-full max-w-xs"
                        placeholder="Search"
                    />
                    <img
                        className="h-8 border border-black rounded-r-md bg-gray-200 cursor-pointer"
                        src={search_icon}
                        alt="search"
                    />
                </div>
                {/* Adjust the ul to have a fixed max-width and position it absolutely */}
                <ul
                    className="top-10 w-full max-w-xs bg-white border border-gray-300 rounded-md shadow-md">
                    {showSuggestions && searchQuery && suggestions.map(suggestion => (
                        <li key={suggestion} className="p-2 hover:bg-gray-100 cursor-pointer truncate">
                            🔍 {suggestion}
                        </li>
                    ))}
                </ul>
            </div>



            <img className="h-8 ml-auto"
                src={user_icon} alt="User" />
        </div>
    )
}

export default Head