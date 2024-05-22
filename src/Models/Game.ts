class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number
  constructor(
    category: string,
    description: string,
    image: string,
    infos: string[],
    id: number
  ) {
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = ''
    this.title = ''
    this.id = id
  }
}

export default Game
