import { useEffect, useState } from "react";
import { data } from "./data";

export function Accordion() {
  const [displayItem, setDisplayItem] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMuliple] = useState([]);

  const handleSingleSelection = (id) => {
    displayItem === id ? setDisplayItem(null) : setDisplayItem(id);
  };

  const handleMultipleSelection = (id) => {
    multiple.includes(id)
      ? setMuliple([...multiple.filter((item) => item !== id)])
      : setMuliple([...multiple, id]);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center m-auto w-3/4">
        <h1> Accordion component</h1>
        <button
          className=" bg-green-900 p-3 my-3 text-white w-content rounded-md"
          onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
        >
          {enableMultipleSelection ? "Multiple Selection" : "Single Selection"}
        </button>

        <ul className="flex flex-col justify-center items-center m-auto w-3/4">
          {data.map(({ id, question, answer }) => (
            <li key={id} className="bg-yellow-700 my-2 w-2/4 p-2 ">
              <div className="flex justify-between">
                <h1>{question}</h1>
                <button
                  onClick={() =>
                    enableMultipleSelection
                      ? handleMultipleSelection(id)
                      : handleSingleSelection(id)
                  }
                >
                  +
                </button>
              </div>
              {(multiple.includes(id) || displayItem === id) && <p>{answer}</p>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
