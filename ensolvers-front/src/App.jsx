import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsLoading } from './store/selectors/loading'
import { Loading } from './components/Loading'
import { Container } from './components/Container'
import { Home } from './pages/Home'
import { EditToDo } from './pages/EditToDo'

function App() {
	const status = useSelector((state) => getIsLoading(state))
	return (
		<div className="App bg-slate-200">
			<BrowserRouter>
				{status > 0 && <Loading />}
				<Container>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/editar/:id" element={<EditToDo />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</div>
	)
}

export default App
