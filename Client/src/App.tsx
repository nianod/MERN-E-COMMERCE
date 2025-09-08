import Home from "./Pages/Home"
import Layout from "./Components/Layout/Layout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Signup from "./Pages/Auth/Signup"
import Signin from "./Pages/Auth/Signin"
import AdminAuth from "../AdminPanel/AdminAuth"

const App = () => {

  return (
      <Router>
        <Routes>
          <Route element={<Layout />}>
           <Route path="/" element={<Home />} />
          </Route>
          <Route path="register" element={<Signup />} />
          <Route path="login" element={<Signin/>} />
          <Route path="admin" element={<AdminAuth/>} />
        </Routes>
      </Router>
  )
}

export default App
