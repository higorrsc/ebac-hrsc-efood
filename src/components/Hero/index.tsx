import { Container, Logo, Title } from './styles'

import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/vector.png'

const Hero = () => (
  <Container style={{ backgroundImage: `url(${background})` }}>
    <Logo src={logo} alt="eFood" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </Container>
)

export default Hero
