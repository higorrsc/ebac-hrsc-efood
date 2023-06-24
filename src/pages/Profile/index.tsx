import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import FoodList from '../../containers/FoodList'

import italianFoodBanner from '../../assets/images/italian_food_banner.png'

const Profile = () => (
  <>
    <Header />
    <Presentation
      key="La Dolce Vita Trattoria"
      foodType="Italiana"
      imageUrl={italianFoodBanner}
      restaurantName="La Dolce Vita Trattoria"
    />
    <FoodList />
  </>
)

export default Profile
