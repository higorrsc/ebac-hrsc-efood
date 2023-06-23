import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'

import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Rotas />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
