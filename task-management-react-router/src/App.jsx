import { Route } from 'react-router-dom'
import './App.css'
import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail'

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>
      </Router>
    </BrowserRouter>
  )
}

export default App
