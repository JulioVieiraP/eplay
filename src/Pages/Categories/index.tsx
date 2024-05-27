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
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportGames} title="Esportes" background="gray" />
        <ProductsList games={FightGames} title="Luta" background="black" />
        <ProductsList games={RpgGames} title="RPG" background="gray" />
        <ProductsList
          games={SimulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  } else {
    return <h1>Carregando...</h1>
  }
}

export default Categories
