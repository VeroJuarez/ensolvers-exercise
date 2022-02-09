import { useEffect} from 'react'
import { useDispatch } from "react-redux";
import { fetchTodos } from "../store/reducers/todos";

export const DataFetcher = ({ children }) => {
	const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <>
      {children}
    </>
  )
}
