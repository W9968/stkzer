import { createGlobalStyle } from 'styled-components'

export const MainStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    html, body {  
    display:flex;
    max-width: 100%;
    font-weight: 400;
    min-height: 100vh;
    flex-direction: column;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.primary.accent_50};
    background: ${({ theme }) => theme.primary.accent_800};
  }

    /* width */
    ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  
    /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.primary.accent_400};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.primary.accent_800};
  }

`
