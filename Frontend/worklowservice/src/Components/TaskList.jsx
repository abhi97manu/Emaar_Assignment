import React, { useContext } from "react";
import { AppContext } from "../Context/ContextAPi";
import axios from "axios";
import { useParams } from "react-router-dom";

const server_url = import.meta.env.VITE_SERVER_URL;
const TaskList = ({ values }) => {
  const { userRole } = useContext(AppContext);
 const { tenantId } = useParams();
  console.log("tenant",tenantId)
  async function OnApprove() {
    try {
      const response = await axios.patch(
        `${server_url}tenant/changeState/${values.workflow_id}`,
        null,
        {
          params: {
            state: values.state_name,
            taskId: values.task_id,
          },
          withCredentials: true,
          headers: {
            "tenant-id": tenantId,
          },
        },
      );

      console.log(response);
    } catch (err) {
      console.log("error ", err);
    }
  }

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-white shadow rounded-xl border">
        <div>
          <p className="font-bold">Workflow</p>
          <h3 className="text-lg font-semibold text-gray-800">
            {values?.workflow_id}
          </h3>
        </div>

        <div>
          <p className="font-bold">Status</p>
          <span
            className={`inline-block mt-1 px-2 py-1 text-xs font-medium rounded-full `}
          >
            {values?.state_name}
          </span>
        </div>

        <button
          disabled={userRole !== values.role_id}
          className={`px-4 py-2 text-sm font-medium rounded-lg text-white ${
            userRole === values.role_id
              ? `hover:bg-blue-700 transition bg-blue-600`
              : `bg-gray-300 cursor-not-allowed`
          }  `}
          onClick={() => OnApprove()}
        >
          {userRole === values.role_id ? `Approve` : `Pending`}
        </button>
      </div>
    </>
  );
};

export default TaskList;
