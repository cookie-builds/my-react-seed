import React from 'react';
import styled from 'styled-components';

/* TODO: Create footer */

const FooterContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  margin-top: 2rem;
  bottom: 0;
  flex-grow: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: end;
`;

const Footer = () => (
  <FooterContainer>
    Footer
  </FooterContainer>
);

export default Footer;