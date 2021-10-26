import { CifraBox, Container, HeaderText, Header } from "./styles";
import cifraImg from '../../assets/cifra.png';

export function Aside() {
  return (
    <Container>
      <Header>
        <CifraBox>
          <img src={cifraImg} alt="cifra"/>
        </CifraBox>

        <HeaderText>
          Minha Carteira
        </HeaderText>
      </Header>
    </Container>
  );
}