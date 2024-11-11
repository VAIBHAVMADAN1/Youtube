import React from 'react'

import hamburger_icon from "../assets/hamburger.png"
import logo_icon from "../assets/logo.png";
import search_icon from "../assets/search.png"
import user_icon from "../assets/user.png"

import { useDispatch } from 'react-redux';

import { toggleMenu } from '../utils/appSlice';
import { Link, useNavigate } from 'react-router-dom';

const Head = () => {
    const dispatch = useDispatch();
    function toggleMenuHandler() {
        dispatch(toggleMenu());
    }
    return (
        <div className="grid grid-flow-col m-5 pb-4 shadow-md">

            <div className="flex">
                <img onClick={toggleMenuHandler}
                    className="h-8 mr-2 cursor-pointer"
                    src={hamburger_icon} alt="Hamburger button" />

                <img className="h-8"
                src={logo_icon} alt="Logo" />
                
            </div>

            <div className="flex h-8">
                <input className="border-black border rounded-l-md col-span-10 w-full"
                    placeholder='Search' />
                <img className="h-8 border border-black rounded-r-md bg-gray-200"
                    src={search_icon} alt="search" />
            </div>

            <img className="h-8 ml-auto"
                src={user_icon} alt="User" />
        </div>
    )
}

export default Head