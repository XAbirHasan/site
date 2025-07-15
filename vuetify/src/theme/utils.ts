import type { ColorPalette } from './colors';

export function isValidTheme (theme: string): theme is 'light' | 'dark' {
  return theme === 'light' || theme === 'dark';
}

export function getColorValue (colors: ColorPalette, colorKey: keyof ColorPalette): string {
  return colors[colorKey];
}

export function validateColorPalette (colors: Partial<ColorPalette>): colors is ColorPalette {
  const requiredColors: (keyof ColorPalette)[] = [
    'primary',
    'secondary',
    'accent',
    'error',
    'info',
    'success',
    'warning',
    'surface',
    'on-surface',
    'on-surface-variant',
    'outline',
  ];

  return requiredColors.every(color =>
    typeof colors[color] === 'string' && colors[color]!.startsWith('#'),
  );
}

export function createColorPalette (colors: ColorPalette): ColorPalette {
  if (!validateColorPalette(colors)) {
    throw new Error('Invalid color palette: missing required colors or invalid format');
  }
  return colors;
}
