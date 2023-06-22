import ActionButton from '../ActionButton'

import estrela from '../../assets/images/estrela.svg'

import { Container, Description, Details, Name, Photo, Score } from './styles'

type Props = {
  photo: string
  name: string
  score: string
  description: string
}

const Restaurant = ({ photo, name, score, description }: Props) => (
  <Container>
    <Photo src={photo} alt="" />
    <Details>
      <Name>{name}</Name>
      <Score>
        <p>{score}</p>
        <img src={estrela} alt="" />
      </Score>
      <Description>{description}</Description>
      <ActionButton type="button" title="Saiba mais">
        Saiba mais
      </ActionButton>
    </Details>
  </Container>
)

export default Restaurant
