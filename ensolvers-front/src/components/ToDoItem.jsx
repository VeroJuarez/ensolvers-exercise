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
		<article className="flex justify-between bg-white rounded my-3 mx-1 p-2 px-4">
			<div>
				<input
					type="checkbox"
					name="isCompleted"
					defaultChecked={isCompleted}
					onChange={() => toggleCompleted(id, isCompleted)}
					className="mr-2"
				/>
        <span className="mr-2">{title}</span>
			</div>
			<div>
				<Link to={`/editar/${id}`} className="mr-2 px-2 py-1 rounded border-solid border-blue-400 text-blue-400 hover:border-transparent hover:bg-blue-300 hover:text-white">
					Editar
				</Link>
				<Link to="#" onClick={() => removeTodo(id)} className="px-2 py-1 rounded border-solid border-red-400 text-red-400 hover:border-transparent hover:bg-red-400 hover:text-white">
					Eliminar
				</Link>
			</div>
		</article>
	)
}
