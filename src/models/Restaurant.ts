class Restaurant {
  id: number
  photo: string
  name: string
  score: string
  description: string
  infos: string[]

  constructor(
    id: number,
    photo: string,
    name: string,
    score: string,
    description: string,
    infos: string[]
  ) {
    this.id = id
    this.photo = photo
    this.name = name
    this.score = score
    this.description = description
    this.infos = infos
  }
}

export default Restaurant
