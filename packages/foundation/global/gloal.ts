import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        font-family: "Pretendard" !important;
    }

    a {
        outline: none;
        color: #000;
    }

    input {
        &:-webkit-autofill {
    -webkit-text-fill-color: #000;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
    }
 
`;

export default GlobalStyles;
