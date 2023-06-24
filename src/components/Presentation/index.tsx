import { Container, FoodText, FoodImage, RestaurantName } from './styles'

type Props = {
  imageUrl: string
  foodType: string
  restaurantName: string
}
const Presentation = ({ imageUrl, foodType, restaurantName }: Props) => (
  <>
    <Container>
      <FoodImage style={{ backgroundImage: `url(${imageUrl})` }}>
        <FoodText>{foodType}</FoodText>
      </FoodImage>
      <RestaurantName>{restaurantName}</RestaurantName>
    </Container>
  </>
)

export default Presentation
