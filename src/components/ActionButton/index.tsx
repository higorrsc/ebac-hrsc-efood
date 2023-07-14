import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  kind: 'primary' | 'secondary'
  disabled?: boolean
}

const ActionButton = ({
  type,
  title,
  to,
  onClick,
  children,
  kind,
  disabled
}: Props) => {
  if (type === 'link') {
    return (
      <ButtonLink title={title} kind={kind} to={to as string}>
        {children}
      </ButtonLink>
    )
  }

  return (
    <ButtonContainer
      title={title}
      kind={kind}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}

export default ActionButton
