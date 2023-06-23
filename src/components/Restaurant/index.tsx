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
  photo: string
  name: string
  score: string
  description: string
  infos: string[]
  profile?: string
}

const Restaurant = ({
  photo,
  name,
  score,
  description,
  infos,
  profile
}: Props) => (
  <Container>
    <Photo src={photo} alt="" />
    <Tags>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Tags>
    <Details>
      <Name>{name}</Name>
      <Score>
        <p>{score}</p>
        <img src={estrela} alt="" />
      </Score>
      <Description>{description}</Description>
      <ActionButton
        type="link"
        to={profile === undefined ? '/' : profile}
        title="Saiba mais"
      >
        Saiba mais
      </ActionButton>
    </Details>
  </Container>
)

export default Restaurant
