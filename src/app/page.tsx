"use client";

import Image from 'next/image'
import { useState } from 'react'



export default function Home() {
  function ListItems({ints,addValue} : {ints: number[], addValue: () => void}){
    return (
      <>
      <button onClick={addValue}>Add Item</button>
     {
      ints.map(id =>{
        return(
          <li key={id} >{id}</li>
        )
      })
     }
      </>
      
    )
  }

  const [ints, setInts] = useState([1,2,3,4,5,6,7,8,9,10])  
  function addValue(){
    const newValue = Math.max(...ints) + 1
    setInts([...ints, newValue])
  }
  return (
    <ul>
      <ListItems ints = {ints} addValue={addValue}/>
    </ul>
  )
}
