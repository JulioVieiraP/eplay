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
              <S.Link>RPG</S.Link>
            </li>
            <li>
              <S.Link>Ação</S.Link>
            </li>
            <li>
              <S.Link>Aventura</S.Link>
            </li>
            <li>
              <S.Link>Esportes</S.Link>
            </li>
            <li>
              <S.Link>Simulação</S.Link>
            </li>
            <li>
              <S.Link>EStratégia</S.Link>
            </li>
            <li>
              <S.Link>FPS</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link>Novidades</S.Link>
            </li>
            <li>
              <S.Link>Promoções</S.Link>
            </li>
            <li>
              <S.Link>Em breve</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </S.Container>
  )
}

export default Footer
