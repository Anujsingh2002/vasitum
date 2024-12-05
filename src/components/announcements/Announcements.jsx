import React from 'react'
import pin from '../../assets/AnnouncementAssets/pin.png'
import dropdown from '../../assets/AnnouncementAssets/dropdown.png'
import threedot from '../../assets/AnnouncementAssets/threedot.png'

const Announcements = () => {
  return (
    <div className='border-2 rounded-md mt-2'>
        <div className='p-2'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-[#161E54] font-semibold'>Announcement</p>
                </div>
                <div>
                    <input className='border-[1px]' type="date" />
                </div>
            </div>

            <div className=''>
                <div className='flex bg-[#FAFAFA] justify-between border-[1px] rounded-md my-1 p-1'>
                    <div className='flex flex-col'>
                        <div>Outing schedule for every departement</div>
                        <div className='text-xs'>5 Minutes ago</div>
                    </div>
                    <div className='flex gap-4 items-center px-1'>
                        <img className='h-[20px]' src={pin} alt="" />
                        <img className= 'h-[4px]' src={threedot} alt="" />
                    </div>
                </div>

                <div className='flex bg-[#FAFAFA] justify-between border-[1px] rounded-md my-1 p-1'>
                    <div className='flex flex-col'>
                        <div>Meeting HR Department</div>
                        <div className='text-xs'>Yesterday, 12:30 PM</div>
                    </div>
                    <div className='flex gap-4 items-center px-1'>
                        <img className='h-[20px]' src={pin} alt="" />
                        <img className= 'h-[4px]' src={threedot} alt="" />
                    </div>
                </div>

                <div className='flex bg-[#FAFAFA] justify-between border-[1px] rounded-md p-1'>
                    <div className='flex flex-col'>
                        <div>IT Department need two more talents for UX/UI Designer position</div>
                        <div className='text-xs'>Yesterday, 09:15 AM</div>
                    </div>
                    <div className='flex gap-4 items-center px-1'>
                        <img className='h-[20px]' src={pin} alt="" />
                        <img className= 'h-[4px]' src={threedot} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='border-t-[1px] flex justify-center'>
            <p className='text-[#FF5151] '>See All Announcement</p>
        </div>

    </div>
  )
}

export default Announcements