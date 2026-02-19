import React from 'react'


const TaskList = ({values}) => {
    

  return (
    <>
       <div className="flex items-center justify-between p-4 bg-white shadow rounded-xl border">
     
        <h3 className="text-lg font-semibold text-gray-800">{values?.title}</h3>
        <span
          className={`inline-block mt-1 px-2 py-1 text-xs font-medium rounded-full `}
        >
          {values?.status}
        </span>
      

      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
        View
      </button>
    </div>
    </>
  )
}

export default TaskList