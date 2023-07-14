import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { CartContainer, InputGroup, OverLay, Row, Sidebar } from './styles'
import { RootReducer } from '../../store'
import { close, clear } from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'
import ActionButton from '../../components/ActionButton'
import CartItem from '../../components/CartItem'
import { priceFormat } from '../../components/Food'

enum CartStep {
  PRODUCTS,
  DELIVERY,
  PAYMENT,
  CONFIRMATION
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const [cartStep, setCartStep] = useState<CartStep>(CartStep.PRODUCTS)

  const handleCartSteps = (step: CartStep) => {
    setCartStep(step)
  }

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    handleCartSteps(CartStep.PRODUCTS)
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome deve ter no mínimo 5 caracteres')
        .required('O campo é obrigatório!'),
      address: Yup.string().required('O campo é obrigatório!'),
      city: Yup.string()
        .min(3, 'A cidade deve ter no mínimo 5 caracteres')
        .required('O campo é obrigatório!'),
      cep: Yup.string()
        .min(10, 'O CEP deve ter 10 caracteres')
        .max(10, 'O CEP deve ter 10 caracteres')
        .required('O campo é obrigatório!'),
      number: Yup.string().required('O campo é obrigatório!'),
      complement: Yup.string(),
      cardName: Yup.string().required('O campo é obrigatório!'),
      cardNumber: Yup.string().required('O campo é obrigatório!'),
      cardCode: Yup.string().required('O campo é obrigatório!'),
      expiresMonth: Yup.string().required('O campo é obrigatório!'),
      expiresYear: Yup.string().required('O campo é obrigatório!')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    return isTouched && isInvalid
  }

  const getTotalCartValue = () => {
    return items.reduce((totalValue, actualValue) => {
      return (totalValue += actualValue.preco!)
    }, 0)
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      handleCartSteps(CartStep.CONFIRMATION)
    }
  }, [dispatch, isSuccess])

  if (items.length === 0 && !isSuccess) {
    closeCart
    return <></>
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <OverLay onClick={closeCart} />
      <Sidebar>
        {isSuccess && data && cartStep === CartStep.CONFIRMATION ? (
          <>
            <div className="container confirmation">
              <h3>Pedido realizado - {data?.orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <div className="padding-top">
                <ActionButton
                  kind="secondary"
                  type="button"
                  title="Concluir"
                  onClick={closeCart}
                >
                  Concluir
                </ActionButton>
              </div>
            </div>
          </>
        ) : (
          <>
            {cartStep === CartStep.PRODUCTS ? (
              items.length > 0 ? (
                <>
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                  <div className="container">
                    <div className="total-price">
                      <p>Valor total</p>
                      <p>{priceFormat(getTotalCartValue())}</p>
                    </div>
                    <ActionButton
                      kind="secondary"
                      type="button"
                      title="Continuar"
                      onClick={() => handleCartSteps(CartStep.DELIVERY)}
                    >
                      Continuar com a entrega
                    </ActionButton>
                  </div>
                </>
              ) : (
                <h3>Seu carrinho está vazio</h3>
              )
            ) : (
              <div className="container">
                <form onSubmit={form.handleSubmit}>
                  {cartStep === CartStep.DELIVERY && (
                    <div>
                      <h3>Entrega</h3>
                      <Row>
                        <InputGroup>
                          <label htmlFor="fullName">Quem irá receber</label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={form.values.fullName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('fullName') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                      </Row>
                      <Row>
                        <InputGroup>
                          <label htmlFor="address">Endereço</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={form.values.address}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('address') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                      </Row>
                      <Row>
                        <InputGroup>
                          <label htmlFor="city">Cidade</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={form.values.city}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputError('city') ? 'error' : ''}
                          />
                        </InputGroup>
                      </Row>
                      <Row>
                        <InputGroup>
                          <label htmlFor="cep">CEP</label>
                          <InputMask
                            type="text"
                            id="cep"
                            name="cep"
                            mask="99.999-999"
                            value={form.values.cep}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputError('cep') ? 'error' : ''}
                          />
                        </InputGroup>
                        <InputGroup>
                          <label htmlFor="number">Número</label>
                          <input
                            type="text"
                            id="number"
                            name="number"
                            value={form.values.number}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputError('number') ? 'error' : ''}
                          />
                        </InputGroup>
                      </Row>
                      <Row>
                        <InputGroup>
                          <label htmlFor="complement">
                            Complemento (opcional)
                          </label>
                          <input
                            type="text"
                            id="complement"
                            name="complement"
                            value={form.values.complement}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                          />
                        </InputGroup>
                      </Row>
                      <div className="padding-top">
                        <ActionButton
                          kind="secondary"
                          type="button"
                          title="Continuar"
                          onClick={() => handleCartSteps(CartStep.PAYMENT)}
                        >
                          Continuar com o pagamento
                        </ActionButton>
                        <ActionButton
                          kind="secondary"
                          type="button"
                          title="Voltar"
                          onClick={() => handleCartSteps(CartStep.PRODUCTS)}
                        >
                          Voltar para o carrinho
                        </ActionButton>
                      </div>
                    </div>
                  )}
                  {cartStep === CartStep.PAYMENT && (
                    <div>
                      <h3>
                        Pagamento - Valor a pagar R${' '}
                        {priceFormat(getTotalCartValue())}
                      </h3>
                      <Row>
                        <InputGroup>
                          <label htmlFor="cardName">Nome no cartão</label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={form.values.cardName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('cardName') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                      </Row>
                      <Row>
                        <InputGroup>
                          <label htmlFor="cardNumber">Número do cartão</label>
                          <InputMask
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            mask="9999 9999 9999 9999"
                            value={form.values.cardNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('cardNumber') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                        <InputGroup maxWidth="88px">
                          <label htmlFor="cardCode">CVV</label>
                          <InputMask
                            type="text"
                            id="cardCode"
                            name="cardCode"
                            mask="999"
                            value={form.values.cardCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('cardCode') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                      </Row>
                      <Row>
                        <InputGroup>
                          <label htmlFor="expiresMonth">
                            Mês de vencimento
                          </label>
                          <InputMask
                            type="text"
                            id="expiresMonth"
                            name="expiresMonth"
                            mask="99"
                            value={form.values.expiresMonth}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('expiresMonth') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                        <InputGroup>
                          <label htmlFor="expiresYear">Ano de vencimento</label>
                          <InputMask
                            type="text"
                            id="expiresYear"
                            name="expiresYear"
                            mask="99"
                            value={form.values.expiresYear}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('expiresYear') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                      </Row>
                      <div className="padding-top">
                        <ActionButton
                          kind="secondary"
                          type="submit"
                          title="Finalizar"
                          onClick={form.handleSubmit}
                          disabled={isLoading}
                        >
                          {isLoading
                            ? 'Finalizando pagamento...'
                            : 'Finalizar pagamento'}
                        </ActionButton>
                        <ActionButton
                          kind="secondary"
                          type="button"
                          title="Voltar"
                          onClick={() => handleCartSteps(CartStep.DELIVERY)}
                          disabled={isLoading}
                        >
                          Voltar para a edição de endereço
                        </ActionButton>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
