import React, { useState } from 'react';    
import { Link } from 'react-router-dom';  
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import './Header.css';

function Header() {
    // Hook
    const [inputSearch,setInputSearch]=useState("");
    return (
        <div className="header">
        <div className="header__left">
            <MenuIcon />
            <Link to="/">
            <img 
            // BEM NAMING CONVERSATION
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png"
            // src="https://neilpatel.com/wp-content/uploads/2015/09/youtube.png"
            alt=""/>
            </Link>
           
        </div>

        <div className="header__input">
            <input
             onChange={(e)=>setInputSearch(e.target.value)}
              value={inputSearch} 
              placeholder="Search" type="text"/>

              <Link to={`/search/${inputSearch}`}>
              <SearchIcon className="header__inputButton"/>
              </Link>
             
        </div>
        
        <div className="header__icons ">
             <VideoCallIcon   className="header__icon" />
             <AppsIcon  className="header__icon" />
             <NotificationsIcon  className="header__icon" />
             <Avatar src="https://avatars1.githubusercontent.com/u/59437039?s=400&u=5f687ceb5102e0d3fe3d603da2be4d14a5ade11b&v=4" alt=""/>
            
        </div>
        </div>
    )
}

export default Header
