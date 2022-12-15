import React from 'react'
import Movie from './Movie'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Movies from './Movies'

export default function App() {
  return (
    <div>
  <Router>
    <Routes>
      <Route path="/" element={<Movie/>}/>
      <Route path="/movies/:id/:search" element={<Movies/>}/>
    </Routes>
  </Router>
    </div>
  )
}
