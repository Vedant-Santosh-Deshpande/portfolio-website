import React from 'react'

const ContactInfoCard = ({icon,text}) => {
  return (
    <div className='flex items-center gap-5 bg-orange-50 rounded border border-orange-100 px-4 py-3 mb-5'>
      <div className="w-10 h-10 text-xl text-[#fbfbfb] flex items-center justify-center bg-[#f6a64f] rounded-lg ">{icon}</div>
      <p className='text-[#b56141] text-xs md:text-sm'>{text}</p>
    </div>
  )
}

export default ContactInfoCard
