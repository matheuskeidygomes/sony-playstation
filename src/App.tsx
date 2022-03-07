import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className="h-screen">
      <div className=" h-screen gradient">
          <Navbar />

          <Home />

      </div>
    </div>
  )
}

export default App
