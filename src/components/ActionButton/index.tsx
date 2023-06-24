import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  kind: 'primary' | 'secondary'
}

const ActionButton = ({ type, title, to, onClick, children, kind }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer title={title} kind={kind} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink title={title} kind={kind} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default ActionButton
