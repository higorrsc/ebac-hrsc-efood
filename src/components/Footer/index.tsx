import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

import { Container, SocialLink, SocialLinks, Text } from './styles'

const Footer = () => (
  <Container>
    <img src={logo} alt="eFood" />
    <SocialLinks>
      <li>
        <SocialLink href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="Instagram" />
        </SocialLink>
      </li>
      <li>
        <SocialLink href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="Facebook" />
        </SocialLink>
      </li>
      <li>
        <SocialLink href="https://twitter.com/" target="_blank">
          <img src={twitter} alt="Twitter" />
        </SocialLink>
      </li>
    </SocialLinks>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </Container>
)

export default Footer
