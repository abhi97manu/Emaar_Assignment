import React, { useContext } from 'react'
import { useGetApiCallWithTenant } from '../Utills/useGetApiCall';
import { AppContext } from '../Context/ContextAPi';
import { useParams } from 'react-router-dom';

const PendingTask = () => {
  const { tenantId } = useParams();
  console.log("Tasks Data:", tenantId);
  const { data } = useGetApiCallWithTenant(`tenant/Pendingtasks`, tenantId);


  return (
    <>
      <div className="w-full h-72 bg-red-200 rounded-xl">
        {data?.data.length > 0 ? (
          data?.data.map((task) => {
            return <TaskList values={task} key={task.task_id} />;
          })
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-600">
              No tasks by you.
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

export default PendingTask