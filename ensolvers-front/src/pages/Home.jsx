import { ToDoItem } from '../components/ToDoItem'

export const Home = () => {
  return (
    <>
      <h1>To-Do List</h1>
      <section>
        <ToDoItem id={1} isCompleted title="Implementar abm de To Dos" />
        <ToDoItem id={2} title="Implementar carpetas" />
      </section>
    </>
  )
}