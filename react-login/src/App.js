
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./component/Auth";

function App() {
  return (
    <Auth/>
    //<BrowserRouter>
      //<Routes>
        //<Route path="/auth" element={<Auth />} />
      //</Routes>
    //</BrowserRouter>
  )
}

export default App