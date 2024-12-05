import React from 'react'
import { NavLink } from 'react-router-dom'

import icon from '../../assets/icon.png'
import dashboardIcon from '../../assets/dashboardAssets/dashboardIcon.png'
import recruitmentIcon from '../../assets/dashboardAssets/recruitmentIcon.png'
import calendarIcon from '../../assets/dashboardAssets/calendarIcon.png'
import employeeIcon from '../../assets/dashboardAssets/employeeIcon.png'
import departmentIcon from '../../assets/dashboardAssets/departmentIcon.png'
import supportIcon from '../../assets/dashboardAssets/supportIcon.png'
import settingsIcon from '../../assets/dashboardAssets/settingsIcon.png'

const Sidebar = () => {
    return (
        <div className='border-r-2 h-[100vh] grid grid-rows-auto2'>
            <div className=''>
                <div className='flex items-center justify-center py-6 gap-2 '>
                    <img className='w-[20px] h-[20px] ' src={icon} alt="" />
                    <p className='text-[#0A337A] font-bold' >Vasitum</p>
                </div>
            </div>


            <div className=' grid grid-rows-auto3 '>
                <div className=' text-[#686868] '>
                    <p className='py-2 px-10 uppercase text-xs'>
                        Main Menu
                    </p>
                </div>
                <NavLink to="/">
                    <div className='flex py-3 px-8 group'>
                        <img className='mx-3 group-hover:hover:text-[#FF5151]' src={dashboardIcon} alt="" />
                        <p className='hidden md:block group-hover:hover:text-[#FF5151] text-[#686868] text-sm'>Dashboard</p>
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div className='flex py-3 px-8 group'>
                        <img className='mx-3  group-hover:hover:text-[#FF5151]' src={recruitmentIcon} alt="" />
                        <p className='hidden group-hover:hover:text-[#FF5151] md:block text-[#686868] text-sm'>Recruitment</p>
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div className='flex py-3 px-8 group'>
                        <img className='mx-3 group-hover:hover:text-[#FF5151]' src={calendarIcon} alt="" />
                        <p className='hidden group-hover:hover:text-[#FF5151] md:block text-[#686868] text-sm'>Schedule</p>
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div className='flex py-3 px-8 group'>
                        <img className='mx-3 group-hover:hover:text-[#FF5151]' src={employeeIcon} alt="" />
                        <p className='hidden group-hover:hover:text-[#FF5151] md:block text-[#686868] text-sm'>Employee</p>
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div className='flex py-3 px-8 group'>
                        <img className='mx-3 group-hover:hover:text-[#FF5151]' src={departmentIcon} alt="" />
                        <p className='hidden group-hover:hover:text-[#FF5151] md:block text-[#686868] text-sm'>Department</p>
                    </div>
                </NavLink>
            </div>


            <div className=''>
                <div className=' text-[#686868] '>
                    <p className='py-2 px-10 uppercase text-xs'>
                        other
                    </p>
                </div>

                <NavLink to="/">
                    <div className='flex py-3 px-8 group'>
                        <img className='mx-3 group-hover:hover:text-[#FF5151]' src={supportIcon} alt="" />
                        <p className='hidden group-hover:hover:text-[#FF5151] md:block text-[#686868] text-sm'>Employee</p>
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div className='flex py-3 px-8 group'>
                        <img className='mx-3 group-hover:hover:text-[#FF5151]' src={settingsIcon} alt="" />
                        <p className='hidden group-hover:hover:text-[#FF5151] md:block text-[#686868] text-sm'>Department</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar