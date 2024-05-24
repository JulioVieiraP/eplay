import Banner from '../../Components/Banner'
import ProductsList from '../../Components/ProductsList'
import Game from '../../Models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4 Remake',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    title: 'Diablo 4',
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 3,
    title: 'zelda',
    category: 'Ação',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    title: 'StarWars',
    category: 'Ação',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 2,
    title: 'Diablo 4',
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'Windows',
    infos: ['05/04'],
    image: diablo
  },
  {
    id: 3,
    title: 'zelda',
    category: 'Ação',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    system: 'Windows',
    infos: ['05/04'],
    image: zelda
  },
  {
    id: 4,
    title: 'StarWars',
    category: 'Ação',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    system: 'Windows',
    infos: ['05/04'],
    image: starWars
  },
  {
    id: 4,
    title: 'StarWars',
    category: 'Ação',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    system: 'Windows',
    infos: ['05/04'],
    image: starWars
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
