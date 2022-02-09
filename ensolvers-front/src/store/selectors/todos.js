export const getTodosState = (store) => store.todos

export const getTodos = (store) =>
	getTodosState(store) ? getTodosState(store) : []