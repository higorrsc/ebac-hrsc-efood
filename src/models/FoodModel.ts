class FoodModel {
  id: number
  photo: string
  name: string
  description: string

  constructor(id: number, photo: string, name: string, description: string) {
    this.id = id
    this.photo = photo
    this.name = name
    this.description = description
  }
}

export default FoodModel
