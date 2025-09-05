import Home from "./Components/Home"
import Layout from "./Components/Routes/Layout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Signup from "./Components/Auth/Signup"

const App = () => {

  return (
      <Router>
        <Routes>
          <Route element={<Layout />}>
           <Route path="/" element={<Home />} />
          </Route>
          <Route path="register" element={<Signup />} />
        </Routes>
      </Router>
  )
}

export default App