import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"

export const EditToDo = () => {
  const { id } = useParams()
  const [todo, setTodo] = useState({})

  const fetchTodo = async () => {
    const response = await axios.get(`http://localhost:4000/todo/${id}`)
    const item = response.data
    setTodo(item)
  }

  useEffect(() => fetchTodo(), [])

  return(
    <>
      <h1>Editing task</h1>
      <input type="text" defaultValue={todo.title} />
    </>
  )
}