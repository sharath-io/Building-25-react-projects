import { useState } from "react"

export function RandomColor() {
    const hexChars = '0123456789ABCDEF';
    const [colorStr, setColorStr] = useState({
        btnName:'HEX color',
        color:'#00FF00'
});

    const randomHexColor=() => {
        let str ='';
      for(let i=0;i<6;i++)
        str=str + hexChars[Math.floor(Math.random()*16)]
    return setColorStr({btnName:'HEX color', color:`#${str}`})
    }

    const randomRGBCOlor =() =>{
        let str =[];
        for(let i=0;i<3;i++)
         str.push(Math.floor(Math.random()* 256))
       setColorStr({btnName:'RGB Color', color:`rgb(${str.join(', ')})`})
    }
  return (
    <>
   <div style={{backgroundColor:colorStr.color}} className="flex flex-col gap-10 justify-center items-center m-auto w-3/4 py-10">
    <div>RandomColor</div>
    <div>
    <button className='bg-black text-white mx-2 p-3 rounded-md' onClick={randomHexColor}>Create HEX color</button>
    <button  className='bg-black text-white mx-2 p-3 rounded-md' onClick={randomRGBCOlor }>Create RGB color</button>
    </div>
    <h1>{colorStr.btnName}</h1>
    <p>{colorStr.color}</p>
    </div>
    </>

  )
}