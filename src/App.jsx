import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";
import Nav from "./components/Nav.jsx"

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='Contact' element={<about/>}/>
      </Routes>
      <h1 class="text-3xl font-bold underline">Test</h1>
    </>
  )
}

export default App
