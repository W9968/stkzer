import 'styled-components'
import { DefaultTheme } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    palette: {
      accent_050: string
      accent_100: string
      accent_200: string
      accent_300: string
      accent_400: string
      accent_500: string
      accent_600: string
      accent_700: string
      accent_800: string
      accent_900: string
    }

    secondary: {
      accent_050: string
      accent_100: string
      accent_200: string
      accent_300: string
      accent_400: string
      accent_500: string
      accent_600: string
      accent_700: string
      accent_800: string
      accent_900: string
    }
  }
}

export const theme: DefaultTheme = {
  palette: {
    accent_050: '#fafafa',
    accent_100: '#f4f4f5 ',
    accent_200: '#e4e4e7',
    accent_300: '#d4d4d8',
    accent_400: '#a1a1aa',
    accent_500: '#71717a',
    accent_600: '#52525b',
    accent_700: '#3f3f46',
    accent_800: '#262626',
    accent_900: '#000000',
  },

  secondary: {
    accent_050: '#f34335',
    accent_100: '#f34335',
    accent_200: '#f34335',
    accent_300: '#f34335',
    accent_400: '#f34335',
    accent_500: '#f34335',
    accent_600: '#f34335',
    accent_700: '#f34335',
    accent_800: '#f34335',
    accent_900: '#f34335',
  },
}

export const DesignTheme = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html,
  body {  
    display:flex;
    max-width: 100%;
    font-weight: 400;
    min-height: 100vh;
    flex-direction: column;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.palette.accent_050};
    background: ${({ theme }) => theme.palette.accent_900};
  }  

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    margin: 5px 5px;
    background-color: none
    
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.palette.accent_800};
  }


`
