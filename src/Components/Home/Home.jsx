import { useState } from 'react';
import copoLaranja from '../../assets/images/copo1.png';
import copoVermelho from '../../assets/images/copo2.png';
import copoAmarelo from '../../assets/images/copo3.png';
import copaoLaranja from '../../assets/images/copao-laranja.png';
import copaoVermelho from '../../assets/images/copao-vermelho.png';
import copaoAmarelo from '../../assets/images/copao-amarelo.png';
import ellipseVerde from "../../assets/images/ellipse-verde.png"
import ellipseVermelho from '../../assets/images/ellipse-vermelho.png';
import ellipseAmarelo from '../../assets/images/ellipse-amarelo.png';
import Button from '../Button/Button';
import {
  ButtonWrapper,
  Description,
  Figure,
  ImageSection,
  Main,
  MainCopo,
  Section,
  Subtitle,
  TextContainer,
  Thumbnail,
  Title,
} from '/src/Components/Home/style.jsx';

export default function Home() {
  const [corAtual, setCorAtual] = useState('verde');

  const cores = {
    verde: {
      backgroundImage: 'url(' + ellipseVerde + ')',
      copo: copaoLaranja,
    },
    vermelho: {
      backgroundImage: `url(${ellipseVermelho})`,
      copo: copaoVermelho,
    },
    amarelo: {
      backgroundImage: `url(${ellipseAmarelo})`,
      copo: copaoAmarelo,
    },
  };

  const handleChangeColor = (color) => {
    setCorAtual(color);
  };

  return (
    <>
      <Main>
        <Section>
          <TextContainer>
            <Subtitle>Mais que Café</Subtitle>
            <Title>
              Isso é <span>Starbucks</span>
            </Title>
            <Description>
              A Starbucks oferece uma variedade de cafés de alta qualidade.
              Alguns dos cafés mais populares incluem o Caffè Americano, o
              Cappuccino, o Latte Macchiato e o Espresso. Além disso, a
              Starbucks oferece bebidas quentes e frias, doces diferenciados e
              sanduíches.
            </Description>
            <ButtonWrapper>
              <Button />
            </ButtonWrapper>
          </TextContainer>
        </Section>
        <Section>
          <Figure>
            <Thumbnail
              src={copoLaranja}
              alt="Copo Laranja"
              onClick={() => handleChangeColor('verde')}
            />
            <Thumbnail
              src={copoVermelho}
              alt="Copo Vermelho"
              onClick={() => handleChangeColor('vermelho')}
            />
            <Thumbnail
              src={copoAmarelo}
              alt="Copo Amarelo"
              onClick={() => handleChangeColor('amarelo')}
            />
          </Figure>
        </Section>
        <ImageSection
          className="image-section"
          style={{
            backgroundImage: cores[corAtual].backgroundImage,
          }}
        >
          <MainCopo
            src={cores[corAtual].copo}
            alt={`Copo ${corAtual}`}
            className="main-copo"
          />
        </ImageSection>
      </Main>
      </>
  );
}