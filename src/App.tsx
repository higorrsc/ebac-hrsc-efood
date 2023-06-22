import { GlobalStyle } from './styles'

import RestaurantList from './containers/RestaurantList'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Hero />
        <RestaurantList />
        <Footer />
      </div>
    </>
  )
}

export default App
