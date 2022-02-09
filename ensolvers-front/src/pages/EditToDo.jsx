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
			<h1 className="text-center font-medium">EDITING TASK</h1>
			<form className="grid grid-cols-8 gap-2 my-3">
				<input
					type="text"
					defaultValue={todo.title}
					onChange={(event) => setNewTitle(event.target.value)}
					className="col-span-6"
				/>
				<input
					type="submit"
					value="Editar"
					onClick={(event) => {
						event.preventDefault()
						editTodo()
					}}
					className="col-span-2 cursor-pointer font-medium bg-blue-300 text-white hover:border-transparent hover:bg-blue-500"
				/>
			</form>
		</>
	)
}
