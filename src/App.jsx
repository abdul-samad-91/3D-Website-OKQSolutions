import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Platform from './pages/Platform'
import Solution from './pages/Solution'
import Industries from './pages/Industries'
import About from './pages/About'
import Resources from './pages/Resources'
import StandardsIntelligence from './pages/StandardsIntelligence'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/standards-intelligence" element={<StandardsIntelligence />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
