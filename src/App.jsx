import { BrowserRouter, Routes, Route } from "react-router"
import DataProvider from "./context/DataProvider"
import Home from "./pages/Home"

import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
