import { React } from 'react'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import HomeProvider from './contexts/Home/HomeProvider'

function App() {

  return (
      <HomeProvider>
          <Header />
          <Products />
      </HomeProvider>
  )
}

export default App
