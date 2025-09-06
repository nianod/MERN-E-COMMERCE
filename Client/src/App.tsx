import Home from "./Components/Home"
import Layout from "./Components/Routes/Layout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Signup from "./Components/Auth/Signup"
import Signin from "./Components/Auth/Signin"

const App = () => {

  return (
      <Router>
        <Routes>
          <Route element={<Layout />}>
           <Route path="/" element={<Home />} />
          </Route>
          <Route path="register" element={<Signup />} />
          <Route path="login" element={<Signin/>} />
        </Routes>
      </Router>
  )
}

export default App