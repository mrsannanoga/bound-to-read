// imports and dependencies
import { createGlobalStyle } from "styled-components";
import bgImage from "../assets/img/bookbg.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

    body {
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
    `;

// Export the GlobalStyle component
export default GlobalStyle;
