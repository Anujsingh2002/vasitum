import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import searchIcon from '../../assets/navbarAssets/searchIcon.png'
import notificationsIcon from '../../assets/navbarAssets/notificationsIcon.png'
import groupIcon from '../../assets/navbarAssets/groupIcon.png'
import dropdownIcon from '../../assets/navbarAssets/dropdownIcon.png'
import profilePhoto from '../../assets/navbarAssets/ProfilePhoto.png'

const Navbar = () => {
    const [token, setToken] = useState(true);

    return (
        <div className='h-[10vh] flex '>
            <div className=' w-[33%]'>
                <div className='py-3 relative group'>
                    <input className='hidden md:block w-[290px] bg-[#FAFAFA] border-[#E0E0E0] px-2 py-1 rounded-sm border-[1px] focus:outline-[#554f4f] focus:' type="text" placeholder='Search' />
                    <IoMdSearch className='absolute text-[#B2B2B2] top-1/3 translate-x-64 right-[95%]' />
                    {/* <img src={searchIcon} className='absolute text-[#B2B2B2] top-1/3 translate-x-64 right-auto' alt="" /> */}
                </div>
            </div>

            <div className=' w-[34%]'></div>

            {
                token ?
                    <div className=' w-[33%] items-center flex gap-10'>
                        <div className='min-w-[30px] min-h-[30px]'>
                            <img src={notificationsIcon} alt="" />
                        </div>

                        <div className='min-w-[30px] min-h-[30px]'>
                            <img src={groupIcon} alt="" />
                        </div>

                        <div className='flex group gap-4 items-center'>
                            <div>
                                <img className='min-w-[30px] min-h-[30px] rounded-full' src={profilePhoto} alt="" />
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='hidden md:block text-[#164E54] font-semibold '>
                                    Admirra John
                                </div>
                                <div>
                                    <img  src={dropdownIcon} alt="" />
                                </div>

                                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                        <p className='hover:text-black cursor-pointer'>My Profile</p>
                                        <p className='hover:text-black cursor-pointer'>My Option</p>
                                        <p onClick={() => { setToken(false) }} className='hover:text-black cursor-pointer'>Logout</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    :
                    <div className='w-[33%] items-center flex justify-end px-10'>
                        <button onClick={() => { setToken(true) }} className='bg-primary w-[150px] py-1 text-white  rounded-full font-light '>Login</button>
                    </div>
            }
        </div>
    )
}

export default Navbar