import Home from "./Components/Home"
import Layout from "./Components/Routes/Layout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {

  return (
      <Router>
        <Routes>
          <Route element={<Layout />}>
           <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App