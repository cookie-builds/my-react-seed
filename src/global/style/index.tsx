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

export const textSize = {
  p: () => css`
    font-weight: ${fontWeight.book};
    line-height: 1;
    font-size: 1rem;
    
    ${mediaQuery.small`
      font-size: 1.0625rem;
    `}
    ${mediaQuery.medium`
      font-size: 1.0625rem;
    `}
    ${mediaQuery.large`
      font-size: 1.125rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 1.125rem;
    `}
  `,
  subtitle: () => css`
    font-weight: ${fontWeight.medium};
    line-height: 1;
    font-size: 1.25rem;

    ${mediaQuery.small`
      font-size: 1.5rem;
    `}
    ${mediaQuery.medium`
      font-size: 1.5rem;
    `}
    ${mediaQuery.large`
      font-size: 1.75rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 1.75rem;
    `}
  `,
  title: () => css`
    font-weight: ${fontWeight.bold};
    line-height: 1;
    font-size: 2rem;

    ${mediaQuery.small`
      font-size: 2.25rem;
    `}
    ${mediaQuery.medium`
      font-size: 2.25rem;
    `}
    ${mediaQuery.large`
      font-size: 2.5rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 2.5rem;
    `}
  `,
  huge: () => css`
    font-weight: ${fontWeight.black};
    line-height: 1;
    font-size: 2.5rem;

    ${mediaQuery.small`
      font-size: 2.75rem;
    `}
    ${mediaQuery.medium`
      font-size: 2.75rem;
    `}
    ${mediaQuery.large`
      font-size: 3rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 3rem;
    `}
  `,
};

export const spacing = { xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem' };

export const borderWidth = { sm: '1px', md: '2px' };