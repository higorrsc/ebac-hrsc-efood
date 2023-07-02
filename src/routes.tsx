import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/profile" element={<Menu />}></Route>
  </Routes>
)

export default Rotas
