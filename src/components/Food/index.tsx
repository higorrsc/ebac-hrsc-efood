import ActionButton from '../ActionButton'

import { Container, Description, Details, Name, Photo } from './styles'

type Props = {
  photo: string
  name: string
  description: string
}

const Food = ({ photo, name, description }: Props) => (
  <Container>
    <Details>
      <Photo src={photo} alt="" />
      <Name>{name}</Name>
      <Description>{description}</Description>
      <ActionButton type="button" kind="secondary" title="Saiba mais">
        Mais detalhes
      </ActionButton>
    </Details>
  </Container>
)

export default Food
