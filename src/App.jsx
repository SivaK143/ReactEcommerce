
import './App.css'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import Error from './components/Error'
import { GlobalStyle } from './components/GlobalStyle'
import {ThemeProvider} from "styled-components"

function App() {

  

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/singleproduct/:id' element={<SingleProduct/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error/>}/>

      </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default App
