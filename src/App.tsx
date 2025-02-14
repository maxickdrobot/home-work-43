
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
