import { React } from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import HomeProvider from './contexts/Home/HomeProvider'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (

      <HomeProvider>
        <BrowserRouter>
          <Routes>
              <Route index element={<Home/>} />
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </HomeProvider>

  )
}

export default App
