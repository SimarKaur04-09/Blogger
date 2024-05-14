import { BrowserRouter ,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Signin from "./pages/Signin"
import Signout from "./pages/Signout"
import  Header from "./Components/Header"
import Dashboard from "./pages/Dashboard"


function App() {
  

  return (
    <div className="text-blue-400">
      <BrowserRouter>
      <Header/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/signin" element={<Signin/>}/>
<Route path="/signout" element={<Signout/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
