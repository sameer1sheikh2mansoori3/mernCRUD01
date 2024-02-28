import { useState } from 'react'
import {BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
// import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
     
     <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/read/:id' element={<Update/>} />
      </Routes>
     </Router>
      </div>
    </>
  )
}

export default App
