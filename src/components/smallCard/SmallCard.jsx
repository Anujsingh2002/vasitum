import React from 'react'
const A = [
    {
      heading:"Available Position",
      date:"24",
      desc:"4 Urgently needed",
      color:"bg-[#FFEFE7]",
      textcolor:"text-[#FF5151]"
    },
    {
      heading:"Job Open",
      date:"10",
      desc:"4 Active hiring",
      color:"bg-[#E8F0FB]",
      textcolor:"text-[#3786F1]"
    },
    {
      heading:"New Employees",
      date:"24",
      desc:"4 Department",
      color:"bg-[#FDEBF9]",
      textcolor:"text-[#EE61CF]"
    }
  ]

const SmallCard = () => {
  return (
    
        <div className='grid grid-cols-3 gap-3'>
        {A.map((item,index)=>(
            <div key={index} className={`${item.color} py-4 px-4 rounded-md hover:scale-105 transition-all duration-500`}>
            <h1 className='font-semibold'>{item.heading}</h1>
            <p className='font-bold text-3xl'>{item.date}</p>
            <p className={`${item.textcolor}`}>{item.desc}</p>
            </div>
        ))}
            
        </div>
    
  )
}

export default SmallCard