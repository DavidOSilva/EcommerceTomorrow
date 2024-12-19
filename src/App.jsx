import { React } from 'react'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import HomeProvider from './contexts/Home/HomeProvider'
import Cart from './components/Cart/Cart'

function App() {

  return (
      <HomeProvider>
          <Header />
          <Products />
          {/* <Cart /> */}
      </HomeProvider>
  )
}

export default App
