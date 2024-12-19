import { React } from 'react'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import HomeProvider from './contexts/Home/HomeProvider'
import Footer from './components/Footer/Footer'

function App() {

  return (
      <HomeProvider>
          <Header />
          <Products />
          <Footer/>
      </HomeProvider>
  )
}

export default App
