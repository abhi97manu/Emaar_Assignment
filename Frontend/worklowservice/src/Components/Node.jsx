import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../Context/ContextAPi'


const Node = ({changeState}) => {







  return (
    <>
    <div className='flex items-center gap-2'>
     

    <input
        placeholder="Approve By"
       // value = {stateValues.aprroveBy}
        onChange={(e)=>changeState(prev => ({...prev,aprroveBy: e.target.value}))}
        className="w-20 px-2 text-center bg-gray-600/70 outline-none text-white placeholder-white"
      />

    <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
      <input
        placeholder="State"
     //   value = {stateValues.endState}
        onChange={(e)=>changeState(prev => ({...prev,endState: e.target.value}))}
        className="w-20 text-center bg-gray-600/70 outline-none text-white placeholder-white"
      />
    </div>
    </div>
    </>
  )
}

export default Node