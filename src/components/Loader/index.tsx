import { ClockLoader } from 'react-spinners'

import { color } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClockLoader color={color.primaryColor} />
  </Container>
)

export default Loader
