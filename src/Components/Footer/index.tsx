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
              <S.Link
                title="clique aqui para acessar jogos de Rpg"
                to="/Categorias#rpg"
              >
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aui para acessar jogos de Ação"
                to="/Categorias#action"
              >
                Ação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aui para acessar jogos de Esportes"
                to="/Categorias#sports"
              >
                Esportes
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aui para acessar jogos de Simulação"
                to="/Categorias#simulation"
              >
                Simulação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aui para acessar jogos de Luta"
                to="/Categorias#fight"
              >
                Luta
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="clique aui para acessar a seção de promoções"
                to="/#on-Sale"
              >
                Promoções
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aui para acessar a seção de em breve"
                to="/#coming-soon"
              >
                Em breve
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </S.Container>
  )
}

export default Footer
