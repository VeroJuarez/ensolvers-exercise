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
		<form className="grid grid-cols-8 gap-2 my-3">
			<input
				type="text"
				onChange={(event) => {
					setNewToDo(event.target.value)
				}}
				value={newToDo}
				placeholder="Nuevo to do..."
				className="col-span-6"
			/>
			<input
				type="submit"
				value="+"
				onClick={(event) => {
					event.preventDefault()
					addToDo()
				}}
				className="col-span-2 cursor-pointer font-medium bg-blue-300 text-white hover:border-transparent hover:bg-blue-500"
			/>
		</form>
	)
}
