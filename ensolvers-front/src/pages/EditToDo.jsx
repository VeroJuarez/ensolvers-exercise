import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export const EditToDo = () => {
	const { id } = useParams()
	const [todo, setTodo] = useState({})
	const [newTitle, setNewTitle] = useState('')
  const navigate = useNavigate()

	const fetchTodo = async () => {
		const response = await axios.get(`http://localhost:4000/todo/${id}`)
		const item = response.data[0]
		setTodo(item)
	}

	const editTodo = async () => {
    if(newTitle !== '') {
      await axios.put(`http://localhost:4000/todo/${id}`, {
        title: newTitle,
      })
    }
    navigate('/')
	}

	useEffect(() => fetchTodo(), [])

	return (
		<>
			<h1>Editing task</h1>
			<input
				type="text"
				defaultValue={todo.title}
				onChange={(event) => setNewTitle(event.target.value)}
			/>
			<input
				type="submit"
				value="Editar"
				onClick={(event) => {
					event.preventDefault()
					editTodo()
				}}
			/>
		</>
	)
}
