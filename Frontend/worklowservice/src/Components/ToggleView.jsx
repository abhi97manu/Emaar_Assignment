import { useState } from "react";
import Node from "./Node";

function ToggleView() {
  const [showDiv, setShowDiv] = useState(false);
  const [addNode, setAddNode] = useState(false);

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
        <div className="p-4 bg-gray-200 flex justify-between items-center rounded">
          <Node />

          <button
            onClick={() => setShowDiv(false)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            {" "}
            Cancel
          </button>
        </div>
      )}
    </>
  );
}
export default ToggleView;
