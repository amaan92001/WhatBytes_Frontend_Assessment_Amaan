// src/Nav.jsx
import React from 'react';
import image1 from '../assets/whatbytes_logo.jpg';
import image2 from '../assets/profile.jpg';

import Sidebar from './Sidebar';
import SkillTest from './SkillTest';

const Nav = () => {
  const companyName = 'WhatBytes';
  const userName = ' Amaan Patel';

  return (
    <div className="h-screen flex flex-col">
   
      <nav className="flex justify-between items-center p-4 border-b border-gray-200 text-black">
        <div className="flex items-center">
          <img src={image1} alt="Company Logo" className="h-10 mr-3" />
          <span className="font-bold text-3xl">{companyName}</span>
        </div>
        <div className="flex items-center h-12 border border-gray-300 shadow-lg rounded-xl">
          <img src={image2} alt="User Profile" className="h-8 w-8 rounded-full ml-3" />
          <span className="mr-3">{userName}</span>
        </div>
      </nav>

      <Sidebar/>
      
    </div>
  );
};

export default Nav;
