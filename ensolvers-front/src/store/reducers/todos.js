import axios from 'axios'
import { setLoading } from './loading'

export default function state(state = [], action) {
	// Mutations

	if (action.type === '@todos/SET_TODOS') {
		action.payload.forEach((todo) => {
			if (!state.find((previousTodo) => previousTodo.id === todo.id)) {
				state = state.concat(todo)
			}
		})
	}
	if (action.type === '@todos/CREATE_TODO') {
		state = state.concat(action.payload)
	}
	if (action.type === '@todos/MARK_COMPLETED') {
		state = state.map((todo) => {
			if (todo.id === action.payload) {
				return {
					id: todo.id,
					title: todo.title,
					isCompleted: !todo.isCompleted,
				}
			}
			return todo
		})
	}
	if (action.type === '@todos/UPDATE_TODO') {
		state = state.map((todo) => {
			if (todo.id === action.payload.id) {
				return {
					id: todo.id,
					title: action.payload.title,
					isCompleted: todo.isCompleted
				}
			}
			return todo
		})
	}
	if (action.type === '@todos/DELETE_TODO') {
		state = state.filter((todo) => todo.id !== action.payload)
	}
	return state
}

// Actions

export const fetchTodos = () => async (dispatch) => {
	dispatch(setLoading(true))
	const response = await axios.get('http://localhost:4000/todos')
	const todos = response.data.todos
	dispatch(setLoading(false))
	dispatch({
		type: '@todos/SET_TODOS',
		payload: todos,
	})
}

export const createTodo = (todoTitle) => async (dispatch) => {
	const response = await axios.post('http://localhost:4000/todos', {
		title: todoTitle,
	})
	dispatch({
		type: '@todos/CREATE_TODO',
		payload: response.data.newTodo,
	})
}

export const markCompleted = (id, isCompleted) => async (dispatch) => {
	await axios.put(`http://localhost:4000/todos/${id}`, {
		isCompleted: !isCompleted,
	})
	dispatch({
		type: '@todos/MARK_TODO',
		payload: id,
	})
}

export const updateTodo = (id, title) => async (dispatch) => {
	await axios.put(`http://localhost:4000/todos/${id}`, {
		title: title,
	})
	dispatch({
		type: '@todos/UPDATE_TODO',
		payload: { id, title },
	})
}

export const deleteTodo = (id) => async (dispatch) => {
	await axios.delete(`http://localhost:4000/todos/${id}`)
	dispatch({
		type: '@todos/DELETE_TODO',
		payload: id,
	})
}
