import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="container my-5">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  )
}

export default App
