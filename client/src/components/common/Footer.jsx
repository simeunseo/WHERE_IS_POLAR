import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Link to="https://www.instagram.com/typeandletter_/">
      <FooterWrapper>Logo Design. 강민서</FooterWrapper>
    </Link>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.fonts.small}

  padding:5rem;
`;
