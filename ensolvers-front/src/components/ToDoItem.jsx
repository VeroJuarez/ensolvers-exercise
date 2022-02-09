import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../store/reducers/todos'

export const ToDoItem = ({ id, title, isCompleted = false }) => {
	const dispatch = useDispatch()

	const markCompleted = async (id, isCompleted) => {
		await axios.put(`http://localhost:4000/todos/mark/${id}`, {
			iscompleted: !isCompleted,
		})
	}

	const removeTodo = async (id) => {
		dispatch(deleteTodo(id))
	}

	return (
		<article>
			<input
				type="checkbox"
				name="isCompleted"
				defaultChecked={isCompleted}
				onChange={() => markCompleted(id, isCompleted)}
			/>
			{title}&nbsp;
			<Link to={`/editar/${id}`}>Editar</Link>&nbsp;
			<Link to="#" onClick={() => removeTodo(id)}>
				Eliminar
			</Link>
		</article>
	)
}
