import React from 'react';
import Header from '../components/common/Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';

const Magazine = () => {
  return (
    <>
      <Header />
      <MagazineList>
        <Link to="/magazine/1">
          <MagazineTitleContainer>
            <MagazineTitle1>
              반스신는 아저씨가 되는 것 / 취향은 일상의 영역이다 / Gate keeper / 8:2의 법칙
            </MagazineTitle1>
            <MagazineDate1>23.11.12</MagazineDate1>
          </MagazineTitleContainer>
        </Link>
        <Link to="/magazine/2">
          <MagazineTitleContainer>
            <MagazineTitle2>그래서 얼마 버는데? / 관성의 힘을 믿는다 / 좋아하는 일로 돈 벌기</MagazineTitle2>
            <MagazineDate2>23.11.24</MagazineDate2>
          </MagazineTitleContainer>
        </Link>
      </MagazineList>
      <Footer />
    </>
  );
};

export default Magazine;

const MagazineList = styled.div`
  margin-top: 8rem;
  padding-bottom: 10rem;
`;

const MagazineTitleContainer = styled.div`
  width: max-content;
  position: relative;
`;

const MagazineDate1 = styled.div`
  position: absolute;
  top: -3.5rem;
  left: 8rem;

  ${({ theme }) => theme.fonts.head3}
  color:${({ theme }) => theme.colors.grey10};
  background-color: ${({ theme }) => theme.colors.white};

  padding: 1rem;

  width: max-content;
`;

const MagazineDate2 = styled.div`
  position: absolute;
  top: -3.5rem;
  right: -2rem;

  ${({ theme }) => theme.fonts.head3}
  color:${({ theme }) => theme.colors.grey10};
  background-color: ${({ theme }) => theme.colors.white};

  padding: 1rem;

  width: max-content;
`;

const MagazineTitle1 = styled.div`
  ${({ theme }) => theme.fonts.head3}

  width:100%;
  padding: 3.5rem;
  padding-right: 100vw;
  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  margin-left: 10rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey10};

    & + div {
      background-color: ${({ theme }) => theme.colors.grey10};
      color: ${({ theme }) => theme.colors.white};
      border: 0.1rem solid ${({ theme }) => theme.colors.white};
    }
  }
`;

const MagazineTitle2 = styled.div`
  ${({ theme }) => theme.fonts.head3}

  width:max-content;
  padding: 3rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  border-left: none;
  margin-top: 10rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey10};

    & + div {
      background-color: ${({ theme }) => theme.colors.grey10};
      color: ${({ theme }) => theme.colors.white};
      border: 0.1rem solid ${({ theme }) => theme.colors.white};
    }
  }
`;
