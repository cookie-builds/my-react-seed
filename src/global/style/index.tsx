import { css } from 'styled-components';

export const color = {
  text: '',
  white: '',
  black: '',
  medium: '',
  light: '',
  transparent: 'transparent',
  error: '',
  success: '',
  warning: '',
  default: {
    primary: '',
    hover: '',
    focus: '',
    active: '',
    disabled: '',
  },
  accent: {
    accent: '',
    hover: '',
    focus: '',
    active: '',
    disabled: '',
  },
};

export const screenSize = {
  small: '30rem',
  medium: '48rem',
  large: '64rem',
  extraLarge: '75rem',
  huge: '120rem',
};

export const mediaQuery = {
  small: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.small}) {
      ${css(args)}
    }
  `,
  medium: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.medium}) {
      ${css(args)}
    }
  `,
  large: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.large}) {
      ${css(args)}
    }
  `,
  extraLarge: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.extraLarge}) {
      ${css(args)}
    }
  `,
  huge: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.huge}) {
      ${css(args)}
    }
  `,
};

export const fontWeight = {
  light: 300,
  book: 400,
  medium: 500,
  bold: 700,
  black: 800,
};

export const spacing = { xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem' };

export const borderWidth = { sm: '1px', md: '2px' };
