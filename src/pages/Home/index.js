import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { MdOutlineBackspace, MdOutlineHelpCenter } from "react-icons/md";
import "react-simple-keyboard/build/css/index.css";
import styled from "styled-components";
import { Input } from "../../components/Input";

export function Home() {
  const inputArray = [
    {
      input: <Input />,
    },
    {
      input: <Input />,
    },
    {
      input: <Input />,
    },
    {
      input: <Input />,
    },
    {
      input: <Input />,
    },
  ];

  useEffect(() => {
    fetchWords();
  }, []);

  async function fetchWords() {
    const response = await fetch(
      "https://significado.herokuapp.com/synonyms/livro"
    );
    console.log(response);
  }
  const handleKeyClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <Button onClick={() => console.log("Aqui ira modal de Tutorial")}>
            <HelpIcon>
              <MdOutlineHelpCenter />
            </HelpIcon>
          </Button>

          <Title>
            Word <span> Break</span>
          </Title>
          <Button>
            <SettingsIcon>
              <FiSettings />
            </SettingsIcon>
          </Button>
        </HeaderContainer>
      </Header>
      <GameContainer>
        <Main>
          <Container>
            {inputArray.map((item, index) => (
              <div key={index}>{item.input}</div>
            ))}
          </Container>
        </Main>
        <KbdContainer>
          <Kbd>
            <KbdKey onClick={(e) => handleKeyClick()}>Q</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>W</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>E</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>R</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>T</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>Y</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>U</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>I</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>O</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>P</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>A</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>S</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>D</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>F</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>G</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>H</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>J</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>K</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>L</KbdKey>
            <KbdKeyBckSpc>
              <MdOutlineBackspace />
            </KbdKeyBckSpc>
            <KbdKey onClick={(e) => handleKeyClick()}>Z</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>X</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>C</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>V</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>B</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>N</KbdKey>
            <KbdKey onClick={(e) => handleKeyClick()}>M</KbdKey>
            <KbdKeyEnter>ENTER</KbdKeyEnter>
          </Kbd>
        </KbdContainer>
      </GameContainer>
    </>
  );
}
export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  width: 100%;
`;
export const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 50;
  justify-content: center;
  margin: 1vh 0;
  overflow: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: 100%;
`;
export const KbdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Kbd = styled.div`
  grid-gap: 1em 1em;
  box-sizing: border-box;
  display: grid;
  flex-shrink: 0;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(3, 33%);
  height: var(--kbd-height);
  padding: 0 3em 3em;
  min-width: 5%;
`;
export const KbdKeyBckSpc = styled.div`
  align-items: center;
  background-color: #4c4347;
  border: none;
  border-radius: 8%;
  color: #fafaff;
  font-size: 30px;
  padding: 20px;
  cursor: pointer;
  display: flex;
  font-weight: 700;
  grid-column: span 3;
  justify-content: center;
`;
export const KbdKeyEnter = styled.div`
  align-items: center;
  background-color: #4c4347;
  border: none;
  border-radius: 8%;
  color: #fafaff;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  display: flex;
  font-weight: 700;
  grid-column: span 5;
  justify-content: center;
`;
export const KbdKey = styled.div`
  align-items: center;
  background-color: #4c4347;
  border: none;
  border-radius: 8%;
  color: #fafaff;
  cursor: pointer;
  display: flex;
  font-size: min(4em, calc(var(--kbd-height) / 6));
  font-weight: 500;
  grid-column: span 3;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 45%;
`;
export const HelpIcon = styled.div`
  display: flex;
  font-size: 40px;
  margin: 0 15px;
  color: var(--white);
`;
export const Button = styled.div`
  cursor: pointer;
`;
export const SettingsIcon = styled.div`
  display: flex;
  font-size: 30px;
  margin: 0 15px;
  color: var(--white);
`;
export const KeyboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
export const KeyboardWidth = styled.div`
  width: 60%;
`;
export const Container = styled.div`
  width: 100%;
  margin-top: 60px;
`;
export const Title = styled.div`
  display: flex;
  font-size: 45px;
  color: white;
  font-weight: bold;
  span {
    color: var(--lightblue);
  }
`;
