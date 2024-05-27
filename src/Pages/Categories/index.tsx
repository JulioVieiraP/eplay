import ProductsList from '../../Components/ProductsList'
import {
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
  useGetActionGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: SimulationGames } = useGetSimulationGamesQuery()
  const { data: RpgGames } = useGetRpgGamesQuery()
  const { data: FightGames } = useGetFightGamesQuery()

  if (actionGames && sportGames && SimulationGames && RpgGames && FightGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={FightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={RpgGames} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={SimulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  } else {
    return <h1>Carregando...</h1>
  }
}

export default Categories
