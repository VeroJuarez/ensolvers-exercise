import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddToDoForm = () => {
	const [newToDo, setNewToDo] = useState('')
  const navigate = useNavigate()

	const addToDo = async () => {
		await axios.post('http://localhost:4000/todo', {title: newToDo})
    navigate('/')
	}

	return (
		<form>
			<input
				type="text"
				onChange={(event) => {
					setNewToDo(event.target.value)
				}}
			/>
			<input
				type="submit"
				value="Agregar"
				onClick={(event) => {
					event.preventDefault()
					addToDo()
				}}
			/>
		</form>
	)
}
