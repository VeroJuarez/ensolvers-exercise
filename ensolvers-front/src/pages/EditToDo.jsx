import { useParams } from "react-router-dom"

export const EditToDo = () => {
  const { id } = useParams()
  return(
    <>
    <h1>Editing task</h1>
    <input type="text" defaultValue={id} />
    </>
  )
}