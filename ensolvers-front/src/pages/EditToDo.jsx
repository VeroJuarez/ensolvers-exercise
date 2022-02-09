import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { updateTodo } from '../store/reducers/todos'

export const EditToDo = () => {
	const { id } = useParams()
	const [todo, setTodo] = useState({})
	const [newTitle, setNewTitle] = useState('')
	const dispatch = useDispatch()
  const navigate = useNavigate()

	const fetchTodo = async () => {
		const response = await axios.get(`http://localhost:4000/todos/${id}`)
		const item = response.data.todo
		setTodo(item)
	}

	const editTodo = async () => {
    if(newTitle !== '') {
      dispatch(updateTodo(todo.id, newTitle))
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
