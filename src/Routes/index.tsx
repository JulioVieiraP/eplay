import { Routes, Route } from 'react-router-dom'

type Props = {
  Home: React.ComponentType
  Produtos?: React.ComponentType
}

const RouterView = ({ Home }: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default RouterView
