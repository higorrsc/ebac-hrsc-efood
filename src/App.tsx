import { GlobalStyle } from './styles'

import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App
