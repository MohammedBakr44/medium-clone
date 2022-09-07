import AppRoutes from 'appRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h3>Welcome here's our app</h3>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
