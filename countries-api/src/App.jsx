import React from "react"
import {Routes, Route}  from 'react-router-dom'
import Home from "./assets/components/Home"
import Countries from "./assets/components/Countries"
import Country from "./assets/components/Country"
import Search from "./assets/components/search"
import Notfound from "./assets/components/Notfound"


function App() {

  return (
    <Routes>
      <Route exact  path="" element={<Home/>}  />
      <Route path="/countries" element={<Countries/>} />
      <Route path="/country" element={<Country/>}  />
      <Route path="/search"  element={<Search/>} />
      <Route path="*" element={<Notfound/>}  />
    </Routes>
  )
}

export default App
