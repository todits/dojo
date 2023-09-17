import Navbar from "./component/Navbar"
import Home from "./component/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Create from "./component/Create"
import BlogDetails from "./component/BlogDetails"
import NotFound from "./component/NotFound"

function App() {
   return (
      <Router>
         <div className="App">
            <div className="content">
               <Navbar />

               <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/create" element={<Create />}></Route>
                  <Route path="/blogs/:id" element={<BlogDetails />}></Route>
                  <Route path="*" element={<NotFound />}></Route>
               </Routes>
            </div>
         </div>
      </Router>
   )
}

export default App

// npx json-server --watch data/db.json --port 8000
