import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export const ToDoItem = ({ id, title, isCompleted = false }) => {
  const navigate = useNavigate()

  const markCompleted = async (id, isCompleted) => {
    await axios.put(`http://localhost:4000/todo/mark/${id}`, { 
      iscompleted: !isCompleted
    })
  }

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:4000/todo/${id}`)
    navigate('/')
  }

	return (
		<article>
			<input type="checkbox" name="isCompleted" defaultChecked={isCompleted} onChange={() => markCompleted(id, isCompleted)} />
			{title}&nbsp;
			<Link to={`/editar/${id}`}>Editar</Link>&nbsp;
			<Link to="#" onClick={() => deleteTodo(id)}>
				Eliminar
			</Link>
		</article>
	)
}
