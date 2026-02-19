import React from 'react'

const Node = () => {
  return (
    <>
    <div className='flex items-center gap-2'>
     <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
      <input
        placeholder="State"
        className="w-20 text-center bg-gray-600/70 outline-none text-white placeholder-white"
      />
    </div>

    <input
        placeholder="Approve By"
        className="w-20 px-2 text-center bg-gray-600/70 outline-none text-white placeholder-white"
      />

    <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
      <input
        placeholder="State"
        className="w-20 text-center bg-gray-600/70 outline-none text-white placeholder-white"
      />
    </div>
    </div>
    </>
  )
}

export default Node