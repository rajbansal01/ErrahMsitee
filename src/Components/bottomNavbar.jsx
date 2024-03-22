import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Home } from '@mui/icons-material';

export default function LabelBottomNavigation() {

  const [value, setValue] = useState('Home'); // Initial value set to 'Home'

  // Function to handle click on list items
  const handleClick = (newValue) => {
      setValue(newValue);
  };


  return (
    // <BottomNavigation className='bottomBar'  value={value} onChange={handleChange}>
    //   <BottomNavigationAction
    //     label="Home"
    //     value="home"
    //     icon={<HomeIcon />}
    //   />
    //   <BottomNavigationAction
    //     label="Explore"
    //     value="explore"
    //     icon={<ExploreIcon />}
    //   />
    //   <BottomNavigationAction
    //     label="Chats"
    //     value="chats"
    //     icon={<ChatIcon />}
    //   />
    //   <BottomNavigationAction label="Updates" value="updates" icon={ <NotificationsIcon/>} />
    //   <BottomNavigationAction label="Impact" value="impact" icon={<FolderIcon />} />
    // </BottomNavigation>
    // <ul className="d-flex justify-content-between" value={value} onChange={handleChange}>
    //                             <li >Home</li>
    //                             <li >Explore</li>
    //                             <li >Chats</li>
    //                             <li >Updates</li>
    //                             <li >Impact</li>
    //                         </ul>
    // <div className="container">

    
    <ul className="bottomBar d-flex justify-content-between list-unstyled">
                <li onClick={() => handleClick('Home')} className={value === 'Home' ? 'active ' : ''}>
                <NavLink style={{ textDecoration: 'none' ,color:'#929292' }} to="/homePage"><div className="d-flex flex-column align-items-center" style={{color: value === 'Home' ? '#6100FF' : '#929292'}}>
                  <HomeIcon/>
                   Home
                  </div></NavLink>
                </li>
                <li onClick={() => handleClick('Explore')} className={value === 'Explore' ? 'active' : ''}>
                <NavLink  style={{ textDecoration: 'none' ,color:'#929292' }} to="/explore"><div className="d-flex flex-column align-items-center" style={{color: value === 'Explore' ? '#6100FF' : '#929292'}}>
<ExploreIcon/>
                    Explore
                </div></NavLink>
                </li>
                <li onClick={() => handleClick('Chats')} className={value === 'Chats' ? 'active' : ''}>
                <NavLink  style={{ textDecoration: 'none' ,color:'#929292' }} to="/chats"><div className="d-flex flex-column align-items-center" style={{color: value === 'Chats' ? '#6100FF' : '#929292'}}>
<ChatIcon/>
                    Chats
                </div></NavLink>
                </li>
                <li onClick={() => handleClick('Updates')} className={value === 'Updates' ? 'active' : ''}>
                <NavLink  style={{ textDecoration: 'none' ,color:'#929292' }} to="/updates"><div className="d-flex flex-column align-items-center" style={{color: value === 'Updates' ? '#6100FF' : '#929292'}}>
                  <NotificationsIcon/>
                    Updates
                </div></NavLink>
                </li>
                <li onClick={() => handleClick('Impact')} className={value === 'Impact' ? 'active' : ''}>
                <NavLink  style={{ textDecoration: 'none' ,color:'#929292' }} to="/impact"><div className="d-flex flex-column align-items-center" style={{color: value === 'Impact' ? '#6100FF' : '#929292'}}>
<FolderIcon/>
                    Impact
                </div></NavLink>
                </li>
            </ul>
            // </div>
  );
}
