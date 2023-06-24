class RestaurantModel {
  id: number
  photo: string
  name: string
  score: string
  description: string
  infos: string[]
  profile: string

  constructor(
    id: number,
    photo: string,
    name: string,
    score: string,
    description: string,
    infos: string[],
    profile: string
  ) {
    this.id = id
    this.photo = photo
    this.name = name
    this.score = score
    this.description = description
    this.infos = infos
    this.profile = profile
  }
}

export default RestaurantModel
