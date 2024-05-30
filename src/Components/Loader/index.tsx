import { PacmanLoader } from 'react-spinners'
import { colors } from '../../styles/Colors'
import * as S from './styles'

const Loader = () => {
  return (
    <S.ContainerLoading>
      <PacmanLoader color={colors.white} />
    </S.ContainerLoading>
  )
}

export default Loader
