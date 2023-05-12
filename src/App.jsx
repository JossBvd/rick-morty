import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DetailPage, HomePage, LocationPage } from './pages'

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/location" element={<LocationPage/>} />

      <Route path='/characters'>
        {/* index signifie que c'est le chemin de base */}
        <Route  index element={<HomePage />} />
        {/* Character/1 => :id recupere l'element du parent */}
        <Route path=":id" element={<DetailPage />} />
        
      </Route>

        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />

    </Routes>
  )
}
