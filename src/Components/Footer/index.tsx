import * as S from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <S.Container>
      <div className="Container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link to="/Categorias#rpg">RPG</S.Link>
            </li>
            <li>
              <S.Link to="/Categorias#action">Ação</S.Link>
            </li>
            <li>
              <S.Link to="/Categorias#sports">Esportes</S.Link>
            </li>
            <li>
              <S.Link to="/Categorias#simulation">Simulação</S.Link>
            </li>
            <li>
              <S.Link to="/Categorias#fight">Luta</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link to="/#on-Sale">Promoções</S.Link>
            </li>
            <li>
              <S.Link to="/#coming-soon">Em breve</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </S.Container>
  )
}

export default Footer
