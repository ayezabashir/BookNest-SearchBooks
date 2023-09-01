import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Booklist from './components/booklist/Booklist'
import BookDetails from './components/bookdetails/BookDetails'

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='about' element={<About />}></Route>
              <Route path='book' element={<Booklist />}></Route>
              <Route path='/book/:id' element={<BookDetails />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>

    </>
  )
}

export default App
