import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }

    body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    }

    h1 {
    font-size: 3.2em;
    line-height: 1.1;
    }

    button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    }

    button:focus,
    button:focus-visible {
    outline: 2px auto #fff ;

    }
    button:hover{
        opacity: 0.9;
    }

    body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    border: 2px solid #fff;
    }

    h1 {
    font-size: 3.2em;
    line-height: 1.1;
    }

    #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    }

    @keyframes logo-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    }
    
    input{
        font-size: large;
        padding: 5px;
    }

    .input{
        text-align: center;
    }

    #remove{
        background-color: rgb(200, 200, 200);
        margin-left: 2px;
    }
    #salvar{
        background-color: rgb(200, 200, 200);
        margin-left: 2px;
    }
    #editar{
        background-color: rgb(200, 200, 200);
        margin-left: 2px;
    }
`  

export default EstiloGlobal