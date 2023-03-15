// import the createGlobalStyle function from styled-components
import { createGlobalStyle } from "styled-components";

// This is a global style component that will be used to style the entire app
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
        font-family: 'Poppins', sans-serif;
    }
    h1 {
        font-size: 3rem;
    }
    `;

// Export the GlobalStyle component
export default GlobalStyle;
