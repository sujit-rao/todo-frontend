import { useEffect, useState } from "react"
import ToDo from "./components/ToDo.jsx"
import axios from "axios";




function App() {
  const [Todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const [updateUI, setUpdateUI] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err))
  }, [updateUI]);


  const saveToDO = () => {

    axios
      .post(`http://localhost:5000/api/save`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setInput("")
        setUpdateUI(!updateUI)
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className=" p-10 bg-green-600">
      <div className=" container rounded-3xl bg-green-700 p-10 shadow-lg drop-shadow-2xl min-h-screen shadow-green-900 text-white">
        <h1 className=" text-5xl text-center font-bold">ToDo List</h1>

        <div className=" input_holder mt-10 text-2xl flex justify-between pb-8">
          <input className=" bg-white rounded-md p-1 px-2 w-1/2 text-gray-500 outline-none" value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add a Task..." />
          <button className=" bg-green-600 p-1 rounded-md px-3" onClick={saveToDO}>Add</button>

        </div>

        <div className="list">
        {Todos.map((data) => (<ToDo key={data._id} text={data.toDo} id={data._id} setUpdateUI={setUpdateUI} setShowPopup={setShowPopup} />))}
        </div>

      </div>

    </main>
  )
}

export default App

