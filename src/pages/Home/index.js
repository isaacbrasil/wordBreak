import React, { useEffect } from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
import { MdOutlineHelpCenter } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

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

  async function fetchWords() {
    const response = await fetch("https://significado.herokuapp.com/livro");
    console.log(response);
  }

  useEffect(() => {
    fetchWords();
  }, []);

  const onChange = (e) => {
    console.log("Input changed", e.target.value);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };
  return (
    <>
      <Header>
        <HeaderContainer>
          <Button onClick={console.log("teste")}>
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
      <Container>
        {inputArray.map((item, index) => (
          <div>{item.input}</div>
        ))}
        <KeyboardContainer>
          <KeyboardWidth>
            <Keyboard onChange={onChange} onKeyPress={onKeyPress} />
          </KeyboardWidth>
        </KeyboardContainer>
      </Container>
    </>
  );
}

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
