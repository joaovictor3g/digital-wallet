import { Container, LargeText, Text, Wrapper } from "./styles";

export function Header() {
  return(
    <Container>
      <Wrapper>
        <LargeText>
          Olá, 🤑
        </LargeText>
        <Text>
          João Victor
        </Text>
      </Wrapper>
    </Container>
  );
}