import { Link } from "react-router-dom"

export const ToDoItem = ({ id, title, isCompleted = false }) => {
  return (
    <article>
      <input type="checkbox" name="isCompleted" defaultChecked={isCompleted} />
      { title }&nbsp;
      <Link to={`/editar/${id}`}>Editar</Link>&nbsp;
      <Link to="#" onClick={() => console.log('eliminado')}>Eliminar</Link>
    </article>
  )
}