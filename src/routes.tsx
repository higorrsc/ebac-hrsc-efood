import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/restaurante/:id" element={<Restaurant />}></Route>
  </Routes>
)

export default Rotas
