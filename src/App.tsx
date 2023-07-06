import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'

import Footer from './components/Footer'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <GlobalStyle />
          <Rotas />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
