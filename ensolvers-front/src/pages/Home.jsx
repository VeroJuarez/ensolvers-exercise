import { useSelector } from 'react-redux'

import { getTodos } from '../store/selectors/todos'
import { AddToDoForm } from '../components/AddToDoForm'
import { ToDoItem } from '../components/ToDoItem'

export const Home = () => {
  const todos = useSelector((state) => getTodos(state))

	return (
		<div>
			<h1>To-Do List</h1>
			<AddToDoForm />
			<br />
			<section>
        { todos.length === 0 && 
          <h4>No hay nada que mostrar, agregá un to-do para verlo acá</h4>
        }
				{ todos.map((todo) => (
					<ToDoItem
						id={todo.id}
						title={todo.title}
						isCompleted={todo.isCompleted}
						key={todo.id}
					/>
				))}
			</section>
		</div>
	)
}
