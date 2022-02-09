import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../store/reducers/todos'

export const AddToDoForm = () => {
	const [newToDo, setNewToDo] = useState('')
	const dispatch = useDispatch()

	const addToDo = async () => {
		if (newToDo === '') return
		dispatch(createTodo(newToDo))
		setNewToDo('')
	}

	return (
		<form>
			<input
				type="text"
				onChange={(event) => {
					setNewToDo(event.target.value)
				}}
				value={newToDo}
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
