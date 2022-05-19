import 'styled-components'
import { DefaultTheme } from 'styled-components'

/* Extending the DefaultTheme interface. */
declare module 'styled-components' {
  interface DefaultTheme {
    primary: {
      accent_0: string
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
    secondary: {}
    error: {
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
    accent_0: '#fffffe',
    accent_50: '#f9fafb',
    accent_100: '#f3f4f6',
    accent_200: '#e5e7eb',
    accent_300: '#d1d5db',
    accent_400: '#9ca3af',
    accent_500: '#6b7280',
    accent_600: '#4b5563',
    accent_700: '#374151',
    accent_800: '#1f2937',
    accent_900: '#111827',
  },

  secondary: {},

  error: {
    accent_500: '#ef4444',
  },
  success: {
    accent_500: '#22c55e',
  },
}
