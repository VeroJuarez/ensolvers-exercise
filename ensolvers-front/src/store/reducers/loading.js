const initialState = {
	loading: 0,
}

export default function state(state = initialState, action) {
	if (action.type === '@loading/SET_LOADING') {
		state.loading = action.payload ? state.loading + 1 : state.loading - 1
	}
	return state
}

export const setLoading = (isLoading) => (dispatch) => {
	dispatch({ type: '@loading/SET_LOADING', payload: isLoading })
}