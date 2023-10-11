import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './pages/Search'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

