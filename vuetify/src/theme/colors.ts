import type { ThemeDefinition } from 'vuetify';

interface ColorPalette {
  'primary': string
  'secondary': string
  'accent': string
  'error': string
  'info': string
  'success': string
  'warning': string
  'surface': string
  'on-surface': string
  'on-surface-variant': string
  'outline': string
}

interface ThemeConfig {
  defaultTheme: 'light' | 'dark'
  themes: {
    light: ThemeDefinition
    dark: ThemeDefinition
  }
}

export const lightTheme: ThemeDefinition = {
  colors: {
    'primary': '#1976d2',
    'secondary': '#424242',
    'accent': '#82b1ff',
    'error': '#ff5252',
    'info': '#2196f3',
    'success': '#4caf50',
    'warning': '#ffc107',
    'surface': '#ffffff',
    'on-surface': '#000000',
    'on-surface-variant': '#666666',
    'outline': '#e0e0e0',
  } satisfies ColorPalette,
};

export const darkTheme: ThemeDefinition = {
  colors: {
    'primary': '#82b1ff',
    'secondary': '#424242',
    'accent': '#ff4081',
    'error': '#ff5252',
    'info': '#2196f3',
    'success': '#4caf50',
    'warning': '#ffc107',
    'surface': '#121212',
    'on-surface': '#ffffff',
    'on-surface-variant': '#aaaaaa',
    'outline': '#333333',
  } satisfies ColorPalette,
};

export const themeConfig: ThemeConfig = {
  defaultTheme: 'dark',
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
};

export type { ColorPalette, ThemeConfig };
