import { useState } from 'react'
import axios from 'axios'

export const AddToDoForm = () => {
	const [newToDo, setNewToDo] = useState('')

	const addToDo = async () => {
		const response = await axios.post('http://localhost:4000/todo', {title: newToDo})
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
