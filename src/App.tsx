import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className="min-h-screen">
      <div className="gradient">
          <Navbar />

          <Home />

      </div>
    </div>
  )
}

export default App
