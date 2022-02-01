import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home'
import { EditToDo } from './pages/EditToDo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editar/:id" element={<EditToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
