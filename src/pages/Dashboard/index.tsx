import { Aside } from "../../components/Aside";
import { Header } from "../../components/Header";
import { ResumeBalance } from "../../components/ResumeBalance";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Aside />
      <Header />
      <ResumeBalance />
    </Container>
  );
}