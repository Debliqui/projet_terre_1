import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Articles from "./pages/Articles"
import DataProvider from "./context/DataProvider"

import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Articles />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
