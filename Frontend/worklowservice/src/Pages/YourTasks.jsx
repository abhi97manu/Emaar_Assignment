import React, { useContext } from "react";
import { AppContext } from "../Context/ContextAPi";
import { useGetApiCallWithTenant } from "../Utills/useGetApiCall";
import TaskList from "../Components/TaskList";
import { useParams } from "react-router-dom";

const YourTasks = () => {
  const { tenantId } = useParams();


  console.log("Tenant ID in YourTasks:", tenantId);
  const { data } = useGetApiCallWithTenant(`tenant/tasks `, tenantId);

  console.log("Tasks Data:", data?.length);
  return (
    <>
      <div className="w-full flex flex-col gap-2 h-full rounded-xl">
        {data?.length > 0 ? (
          data?.map((task) => {
            return <TaskList values={task} key={task.task_id} />;
          })
        ) : (
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-600">
              No tasks by you.
            </h2>
            
          </div>
        )}
      </div>
    </>
  );
};

export default YourTasks;
