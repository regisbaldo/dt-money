import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33CC95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-body: #969CB2;
    --text-title: #363f5f;
    --shape:#ffffff;
}

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        @media(max-width:1080px){
            font-size:93.75%
        }

        @media(max-width:720){
            font-size:87.5%
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing:antialiased;
    }

    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5{
        font-weight: 600;

    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor:not-allowed
    }

    .react-modal-overlay{
        background: rgb(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    .react-modal-content{
        background: var(--background);
        width: 100%;
        max-width: 598px;
        padding: 3rem;
        border-radius: 0.24rem;
        position: relative;
        
    }

    .react-modal-close{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: 0;

    transition: filter 0.25s;

    &:hover{
        filter:  brightness(0.5);
    }

}

`;
