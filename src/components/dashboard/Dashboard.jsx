import React from 'react'
import SmallCard from '../smallCard/SmallCard'
import BigCard from '../bigCard/BigCard'
import Announcements from '../announcements/Announcements'
import threedot from '../../assets/AnnouncementAssets/threedot.png'

const B=[
  {
    heading:'Interview with candidates',
    timing:'Today - 10.30 AM'
  },
  {
    heading:'Short meeting with product designer from IT Departement',
    timing:'Today - 09.15 AM'
  },{
    heading:'Interview with candidates',
    timing:'Today - 10.30 AM'
  },
  {
    heading:'Short meeting with product designer from IT Departement',
    timing:'Today - 09.15 AM'
  },
  {
    heading:'Interview with candidates',
    timing:'Today - 10.30 AM'
  },
  {
    heading:'Short meeting with product designer from IT Departement',
    timing:'Today - 09.15 AM'
  }
]

const Main = () => {
  return (
    <div className='grid grid-rows-2 md:grid-cols-auto4 h-[90%]'>
      <div className='pr-4'>
        <div>
          <div className='font-semibold text-[#161E54] pb-1'>
            Dashboard
          </div>
        </div>

        <div className='py-1 '>
          <SmallCard />
        </div>

        <div className=''>
          <BigCard />
        </div>

        <div className='mb-10 md:md-0'>
          <Announcements />
        </div>
      </div>


      <div className=''>
        <div className=''></div>

        <div className='grid grid-rows-2 h-[90%] '>
          <div className='border-2 rounded-md '>
            <div className='bg-[#1B204A] text-white pl-6 font-bold py-4'>
              Recent Activity
            </div>

            <div className='bg-[#161E54] text-white px-6 py-4'>
              <div>
                <p className='text-xs py-1'>10.40 AM, Fri 10 Sept 2021</p>
                <p className='font-semibold py-1'>You Posted a New Job</p>
                <p className='text-xs py-1'>Kindly check the requirements and terms of work and make sure everything is right.</p>
              </div>

              <div className='flex py-4 justify-between items-center'>
                <p>Today you makes 12 Activity</p>
                <button className='bg-[#FF5151] hover:scale-105 transition-all duration-500 p-2 rounded-md'>See All Activity</button>
              </div>
            </div>
          </div>

          <div className='pt-6'>
            <div className='p-2'>
              <div className='flex justify-between'>
                <div>
                  <p className='text-[#161E54] font-semibold'>Upcoming Schedule</p>
                </div>
                <div>
                  <input className='border-[1px]' type="date" />
                </div>
              </div>

              <div>
                <p className='text-[#686868] text-xs'>Priority</p>
              </div>

              <div className='flex justify-between border-[1px] p-1 rounded-md items-center'>
                <div>
                <div>Review candidate applications</div>
                <div className='text-xs'>Today - 11.30 AM</div>
                </div>
                <img className='h-[4px]' src={threedot} alt="" />
              </div>

              <div><p className='text-[#686868] text-xs'>Other</p></div>

              <div className='h-[20vh] overflow-scroll'>
                {B.map((item,index)=>(
                  <div key={index} className='flex items-center justify-between bg-[#FAFAFA] border-[1px] p-1 rounded-md'>
                    <div className=''>
                      <p>{item.heading}</p>
                      <p className='text-xs'>{item.timing}</p>
                    </div>
                    <img className='h-[4px]' src={threedot} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Main