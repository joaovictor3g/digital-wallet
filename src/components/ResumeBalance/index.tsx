import { EarningBox } from "../EarningBox";
import { Header } from "./Header";
import { Container, Wrapper } from "./styles";

export function ResumeBalance() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <EarningBox type="balance" value={150}/>
        <EarningBox type="comein" value={5000}/>
        <EarningBox type="comeout" value={4850}/>
      </Wrapper>
    </Container>
  );
}