import { useMemo } from "react";


import { BottomText, Container, Text, Value } from "./styles";
import cifraImg from '../../assets/cifra-grande.png';
import arrowUp from '../../assets/arrow-up.png';
import arrowDown from '../../assets/arrow-down.png';

type EarningBoxProps = {
  type: 'balance' | 'comein' | 'comeout';
  value: number;
};

export function EarningBox({ type, value }: EarningBoxProps) {
  const [image, text] = useMemo(() => {
    if(type==='balance')
      return [cifraImg, 'Saldo'];
    else if(type==='comein')
      return [arrowUp, 'Entradas'];
    else if(type==='comeout')
      return [arrowDown, 'Saídas'];
  }, [type]) as string[];

  return (
    <Container type={type}>
      <Text>{text}</Text>
      <Value>{new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(value)}</Value>

      <img src={image} alt={type}/>

      <BottomText>
        última movimentação em 18/07/2020 às 11h40
      </BottomText>
    </Container>
  );
}