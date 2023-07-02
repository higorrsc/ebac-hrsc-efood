import ActionButton from '../ActionButton'
import Tag from '../Tag'

import estrela from '../../assets/images/estrela.svg'

import {
  Container,
  Description,
  Details,
  Name,
  Photo,
  Score,
  Tags
} from './styles'

type Props = {
  id: number
  title: string
  highlighted: boolean
  kind: string
  score: number
  description: string
  photo: string
}

const Restaurant = ({
  id,
  title,
  highlighted,
  kind,
  score,
  description,
  photo
}: Props) => (
  <Container>
    <Photo src={photo} alt="" />
    <Tags>
      {highlighted && <Tag>Destaque</Tag>}
      <Tag key={kind}>{kind}</Tag>
    </Tags>
    <Details>
      <Name>{title}</Name>
      <Score>
        <p>{score}</p>
        <img src={estrela} alt="" />
      </Score>
      <Description>{description}</Description>
      <ActionButton
        type="link"
        to={`/menu/${id}`}
        title="Saiba mais"
        kind="primary"
      >
        Saiba mais
      </ActionButton>
    </Details>
  </Container>
)

export default Restaurant
