import axios from 'axios';
import React from 'react'
import { RiCloseLine } from "react-icons/ri";


function ToDo({ text, id, setUpdateUI, setShowPopup }) {


  const deleteToDo = () => {
    axios.delete(`https://todo-backend-orpin-psi.vercel.app/api/delete/${id}`)
      .then(res => {
        console.log(res.data)
        setUpdateUI((setUpdateUI) => !setUpdateUI)
      })
  }
 

  return (
    <div className='todo bg-gray-300 text-gray-500 p-1 rounded-md flex justify-between text-lg px-2 mt-4'>
      {text}
      <div className=' icons p-1 flex gap-4'>

        <RiCloseLine onClick={deleteToDo} className=' h-5 cursor-pointer hover:text-white ' />
      </div>
    </div>
  )
}

export default ToDo
