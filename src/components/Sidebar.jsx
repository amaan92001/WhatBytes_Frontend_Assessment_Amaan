import React, { useState } from 'react';
import { MdOutlineBarChart } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { LuFileSpreadsheet } from "react-icons/lu";
import SkillTest from './SkillTest';

const Sidebar = () => {
  const [selected, setSelected] = useState('Skill Test');

  return (
    <div className="flex flex-grow">
      <div className="w-56  text-black flex flex-col border-r border-gray-200">
        <nav className="flex-grow mt-12">
          <ul>
            <li 
              className={`flex items-center p-4 cursor-pointer ${selected === 'Dashboard' ? 'bg-blue-100 text-blue-600 rounded-lg' : 'hover:bg-gray-200'}`}
              onClick={() => setSelected('Dashboard')}
            >
              <MdOutlineBarChart className="mr-0 sm:mr-4" size={28}/>
              <span className={`font-bold ${selected === 'Dashboard' ? 'text-blue-600' : 'text-gray-500'}`}>Dashboard</span>
            </li>
            <li 
              className={`flex items-center p-4 cursor-pointer ${selected === 'Skill Test' ? 'bg-gray-100  rounded-lg' : 'hover:bg-gray-200'}`}
              onClick={() => setSelected('Skill Test')}
            >
              <SlBadge className="mr-0 sm:mr-4" size={28}/>
              <span className={`font-bold ${selected === 'Skill Test' ? 'text-blue-600' : 'text-gray-500'}`}>Skill Test</span>
            </li>
            <li 
              className={`flex items-center p-4 cursor-pointer ${selected === 'Internship' ? 'bg-blue-100 text-blue-600 rounded-lg' : 'hover:bg-gray-200'}`}
              onClick={() => setSelected('Internship')}
            >
              <LuFileSpreadsheet className="mr-0 sm:mr-4" size={28}/>
              <span className={`font-bold ${selected === 'Internship' ? 'text-blue-600' : 'text-gray-500'}`}>Internship</span>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 flex flex-col p-6">
      <span className='text-xl font-semibold text-gray-600'>Skill Test</span>
       <SkillTest/>
      </div>
    </div>
    
  )
}

export default Sidebar;
