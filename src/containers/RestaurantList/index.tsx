import { List } from './styles'

import japaneseFood from '../../assets/images/japanese_food.png'
import italianFood from '../../assets/images/italian_food.png'

import Restaurant from '../../components/Restaurant'

const RestaurantList = () => (
  <List>
    <Restaurant
      photo={japaneseFood}
      name="Hioki Sushi"
      score="4.9"
      description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
      infos={['Destaque da semana', 'Japonesa']}
    />
    <Restaurant
      photo={italianFood}
      name="La Dolce Vita Trattoria"
      score="4.6"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      infos={['Italiana']}
      profile="/profile"
    />
    <Restaurant
      photo={italianFood}
      name="La Dolce Vita Trattoria"
      score="4.6"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      infos={['Italiana']}
      profile="/profile"
    />
    <Restaurant
      photo={italianFood}
      name="La Dolce Vita Trattoria"
      score="4.6"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      infos={['Italiana']}
      profile="/profile"
    />
    <Restaurant
      photo={italianFood}
      name="La Dolce Vita Trattoria"
      score="4.6"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      infos={['Italiana']}
      profile="/profile"
    />
    <Restaurant
      photo={italianFood}
      name="La Dolce Vita Trattoria"
      score="4.6"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      infos={['Italiana']}
      profile="/profile"
    />
  </List>
)

export default RestaurantList
