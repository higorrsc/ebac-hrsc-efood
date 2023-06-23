import { Container } from './styles'

export type Props = {
  children: string
}

const Tag = ({ children }: Props) => <Container>{children}</Container>

export default Tag
