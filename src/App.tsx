
import './css/App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  )
}

export default App
