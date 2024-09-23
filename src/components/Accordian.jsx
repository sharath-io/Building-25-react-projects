import { useState } from "react";
import {data} from "./data";

export function Accordion(){
    const [displayItem, setDisplayItem] = useState(null)

    const handleSingleSelection =(id) =>{
       displayItem===id ? setDisplayItem(null) : setDisplayItem(id)
    }

return (
<>

    <ul className="flex flex-col justify-center items-center m-auto w-3/4">
    <button>Single</button>
        {
        data.map(({id,question,answer}) =>
        <li key={id} className="bg-yellow-700 my-2 w-2/4 p-2">
            <div className="flex justify-between">
                <h1>{question}</h1>
                <button onClick={()=> handleSingleSelection(id)}>+</button>
            </div>
        {displayItem===id && <p>{answer}</p>}
        </li>)
        }
    </ul>
</>
)
}