import { useDispatch } from 'react-redux'
import { useState } from 'react'

import ActionButton from '../ActionButton'

import {
  Container,
  Description,
  Details,
  Modal,
  ModalContent,
  Name,
  Photo
} from './styles'

import { MenuType } from '../../pages/Home'

import closebutton from '../../assets/images/closebutton.svg'

import { add, open } from '../../store/reducers/cart'

type Props = {
  option: MenuType
}

interface ModalState extends MenuType {
  isVisible: boolean
}

export const priceFormat = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Food = ({ option }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    id: 0,
    nome: '',
    descricao: '',
    foto: '',
    preco: 0,
    porcao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      id: 0,
      nome: '',
      descricao: '',
      foto: '',
      preco: 0,
      porcao: ''
    })
  }

  const dispatch = useDispatch()

  const addFoodToCart = () => {
    dispatch(add(option))
    dispatch(open())
    closeModal()
  }

  return (
    <>
      <Container>
        <Details>
          <Photo src={option.foto} alt="" />
          <Name>{option.nome}</Name>
          <Description>{option.descricao}</Description>
          <ActionButton
            type="button"
            kind="secondary"
            title="Saiba mais"
            onClick={() => {
              setModal({
                isVisible: true,
                id: 0,
                nome: '',
                descricao: '',
                foto: '',
                preco: 0,
                porcao: ''
              })
            }}
          >
            Mais detalhes
          </ActionButton>
        </Details>
      </Container>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent>
          <img
            className="close"
            src={closebutton}
            alt="Ícone de fechar"
            onClick={() => closeModal()}
          />
          <img className="food" src={option.foto} alt="Imagem da comida" />
          <div>
            <h4>{option.nome}</h4>
            <p>
              {option.descricao}
              <br />
              <br />
              Serve: {option.porcao}
            </p>
            <ActionButton
              type="button"
              kind="secondary"
              title="Adicionar ao carrinho"
              onClick={addFoodToCart}
            >
              {`Adicionar ao carrinho - ${priceFormat(option.preco)}`}
            </ActionButton>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Food
