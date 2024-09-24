import React from 'react'

const Headline = ({ children }) => {
  return (
    <div>
       <h1 className="text-[24px] md:text-[40px] lg:text-[44px] font-bold leading-snug">
          { children }
        </h1>
    </div>
  )
}

export default Headline
