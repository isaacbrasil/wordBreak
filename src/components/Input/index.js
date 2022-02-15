import React, { useEffect } from "react";
import styled from "styled-components";
import ReactCodeInput from "react-code-input";
// import { reactCodeInput } from "CodeInputField.scss";
export const Input = () => {
  const props = {
    // className: reactCodeInput,

    inputStyle: {
      fontFamily: "Roboto",
      margin: "4px",
      marginBottom: "-10px",
      marginTop: "-5px",
      MozAppearance: "textfield",
      width: "75px",
      borderRadius: "15px",
      fontSize: "60px",
      justifyContent: "center",
      alignItems: "center",
      height: "75px",
      paddingLeft: "7px",
      backgroundColor: "#1f212b",
      color: "white",
      fontWeight: "bold",
      border: "none",
      outline: "none",
    },
    inputStyleInvalid: {
      fontFamily: "Roboto",
      margin: "4px",
      marginBottom: "-10px",
      marginTop: "-5px",
      MozAppearance: "textfield",
      width: "75px",
      borderRadius: "15px",
      fontSize: "60px",
      justifyContent: "center",
      alignItems: "center",
      height: "75px",
      paddingLeft: "7px",
      backgroundColor: "#1f212b",
      color: "white",
      fontWeight: "bold",
      border: "1px solid var(--red)",
      outline: "none",
    },
  };
  return (
    <>
      <InputContainer>
        <ReactCodeInput type="text" fields={5} {...props} />
      </InputContainer>
    </>
  );
};
export const InputContainer = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
