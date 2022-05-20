import 'styled-components'
import { DefaultTheme } from 'styled-components'

/* Extending the DefaultTheme interface. */
declare module 'styled-components' {
  interface DefaultTheme {
    primary: {
      accent_50: string
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
      accent_200: string
      accent_300: string
      accent_500: string
    }

    error: {
      accent_400: string
      accent_500: string
    }
    success: {
      accent_500: string
    }
  }
}

/* Exporting an object called colors that is of type DefaultTheme. */
export const colors: DefaultTheme = {
  primary: {
    accent_50: '#fffffe',
    accent_100: '#f4f4f5',
    accent_200: '#e4e4e7',
    accent_300: '#d4d4d8',
    accent_400: '#a1a1aa',
    accent_500: '#71717a',
    accent_600: '#52525b',
    accent_700: '#3f3f46',
    accent_800: '#1f1f1f',
    accent_900: '#141414',
  },

  secondary: {
    accent_200: '#ddd6fe',
    accent_300: '#c4b5fd',
    accent_500: '#8b5cf6',
  },

  error: {
    accent_400: '#ff5c5c',
    accent_500: '#ef4444',
  },
  success: {
    accent_500: '#22c55e',
  },
}
