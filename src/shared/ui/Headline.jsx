import React from 'react'

const Headline = ({ children }) => {
  return (
    <div>
       <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold leading-snug">
          { children }
        </h1>
    </div>
  )
}

export default Headline
