import { useContext, useState } from "react";
import Node from "./Node";
import { AppContext } from "../Context/ContextAPi";
import axios from "axios";
import { useParams } from "react-router-dom";
const server_url = import.meta.env.VITE_SERVER_URL;

function ToggleView() {
  const { tenantId } = useParams();
  const [showDiv, setShowDiv] = useState(false);
  const [workFlowName, setWorkFlowName] = useState();
  const [numOfNode, setNumOfNode] = useState(0);

  const { transitionData, setTransitionData } = useContext(AppContext);

  const [stateValues, setStateValues] = useState({
    initialState: null,
    aprroveBy: null,
    endState: "draft",
  });

  function onAddState() {
    // setTransitionData((prev) => [...prev, stateValues,{ workFlowName: workFlowName }]);
setTransitionData(prev => {
  const hasWorkflow = prev.some(i => i.workFlowName);

  if (!hasWorkflow) {
    return [{ workFlowName }, ...prev, stateValues];
  }

  return [...prev, stateValues];
});
    setStateValues((prev) => ({
      ...prev,
      initialState: prev.endState,
      endState: null, // optional reset
    })); 
  }

   function onSubmit() {
    // setTransitionData((prev) => [...prev, { workFlowName: workFlowName }])
    setShowDiv(false);
     submitFlow()
    setNumOfNode(0);
  }

  async function submitFlow() {

    console.log("transit : ", transitionData)
    try {
      const response = await axios.post(
        `${server_url}admin/addworkflow`,
        transitionData,
        {
          withCredentials: true,
          headers: {
            "tenant-id": tenantId,
          },
        },
      );

      console.log(response.status);
    } catch (err) {
      console.log("err", err);
    }
  }

  console.log(transitionData);

  return (
    <>
      {!showDiv ? (
        <button
          onClick={() => setShowDiv(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create Workflow
        </button>
      ) : (
        <>
          <div className="w-full items-center p-2">
            <input
              type="text"
              placeholder="Workflow Name"
              value={workFlowName}
              onChange={(e) => setWorkFlowName(e.target.value)}
            ></input>
            <div className="p-4 bg-gray-200 flex justify-between items-center rounded">
              <div className="flex  items-center gap-4">
                <div className="w-24 h-24 text-white rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                  <input
                    placeholder="Start"
                    //   value = {CurrentInit}
                    onChange={(e) =>
                      setStateValues((prev) => ({
                        ...prev,
                        endState: e.target.value,
                      }))
                    }
                    className="w-20 px-2 text-center bg-gray-600/70 outline-none text-white placeholder-white"
                  />
                </div>

                {Array.from({ length: numOfNode }, (_, i) => {
                  return <Node key={i} changeState={setStateValues} />;
                })}

                <button
                  onClick={() => {
                    setNumOfNode((prev) => prev + 1);
                    onAddState();
                  }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 active:scale-95 transition"
                >
                  +
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setShowDiv(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  onClick={() => onSubmit()}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default ToggleView;
