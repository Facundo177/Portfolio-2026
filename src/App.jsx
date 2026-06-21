import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { CV } from "./pages/CV"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="cv" element={<CV/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <SpeedInsights />
    </>
  )
}

export default App
