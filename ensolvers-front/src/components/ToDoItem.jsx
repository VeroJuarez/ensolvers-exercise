import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteTodo, markCompleted } from '../store/reducers/todos'

export const ToDoItem = ({ id, title, isCompleted = false }) => {
	const dispatch = useDispatch()

	const toggleCompleted = async (id, isCompleted) => {
		dispatch(markCompleted(id, isCompleted))
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
				onChange={() => toggleCompleted(id, isCompleted)}
			/>
			{title}&nbsp;
			<Link to={`/editar/${id}`}>Editar</Link>&nbsp;
			<Link to="#" onClick={() => removeTodo(id)}>
				Eliminar
			</Link>
		</article>
	)
}
