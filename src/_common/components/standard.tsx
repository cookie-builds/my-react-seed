import styled from 'styled-components';

import { color, fontSize, mediaQuery } from '../../app/styling';

/* TODO: Setup standard components */

export const StandardContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 3rem 1rem;
  background-color: ${color.black};
  ${mediaQuery.medium`
    width: 100%;
    margin: 3rem 0;
    padding: 3rem 2rem;
  `}
  ${mediaQuery.medium`
    width: calc(100% - 8rem);
    margin: 4rem;
    padding: 4rem;
  `}
  ${mediaQuery.large`
    width: calc(100% - 12rem);
    margin: 6rem;
    padding: 6rem;
  `}
  ${mediaQuery.extraLarge`
    width: 100rem;
    margin: 8rem auto;
    padding: 8rem;
  `}
`;

export const StandardSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${color.white}
`;

type TitleSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

export const StandardText = styled.h1<{ $size?: TitleSize }>`
  color: ${color.white};
  font-size: ${({ $size }) => {
    switch ($size) {
    case 'XS':
      return fontSize.extraSmall;
    case 'S':
      return fontSize.small;
    case 'L':
      return fontSize.large;
    case 'XL':
      return fontSize.extraLarge;
    default:
      return fontSize.medium;
    }
  }};
`;

export const StandardImageWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  
  ${mediaQuery.small`
    width: 60%;
  `}
  
  ${mediaQuery.medium`
    width: 40%;
  `}

  > img {
    width: 100%;
    display: block;
    align-self: center;
    object-fit: cover;
  }
`;