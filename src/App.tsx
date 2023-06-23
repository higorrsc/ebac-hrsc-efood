import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'

import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <GlobalStyle />
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
