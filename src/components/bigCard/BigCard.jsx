import React from 'react'
import img1 from '../../assets/bigcard/img1.png'
import img2 from '../../assets/bigcard/img2.png'

const A = [
  {
    heading: "Total Employees",
    workforce: "216",
    men: "120 Men",
    women: "96 Women",
    image: img1,
    rate: "+2% Past month",
    textcolor:"text-[#161E54]"
  },
  {
    heading: "Talent Request",
    workforce: "16",
    men: "6 Men",
    women: "10 Women",
    image: img2,
    rate: "+5% Past month",
    textcolor:"text-[#161E54]"
  }
]

const BigCard = () => {
  return (
    <div className='grid grid-cols-2'>
      {A.map((item, index) => (
        <div className='flex border-2 p-2 mx-1 rounded-md hover:scale-105 transition-all duration-500'>
          <div>
            <h1 className={`${item.textcolor} font-semibold py-2 rounded-md `}>{item.heading}</h1>
            <p className={`${item.textcolor} font-bold text-3xl`}>{item.workforce}</p>
            <p className='text-xs pt-4'>{item.men}</p>
            <p className='text-xs'>{item.women}</p>
          </div>

          <div className=''>
            <img src={item.image} alt="" />
            <p className=' bg-[#FFEFE7] text-xs my-4'>{item.rate}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default BigCard