import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'
import { GlobalStyle } from './styles'

import Cart from './containers/Cart'
import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <Rotas />
          <Footer />
        </div>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
