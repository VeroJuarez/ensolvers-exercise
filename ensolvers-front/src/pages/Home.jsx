import axios from 'axios'
import { useEffect, useState } from 'react'
import { ToDoItem } from '../components/ToDoItem'

export const Home = () => {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:4000/todo')
    const items = response.data
    setTodos(items)
  }

  useEffect(() => fetchTodos(), [])

  return (
    <>
      <h1>To-Do List</h1>
      <section>
        { todos.map(todo => 
          <ToDoItem id={todo.id} title={todo.title} isCompleted={todo.isCompleted} key={todo.id} />
        )}
      </section>
    </>
  )
}