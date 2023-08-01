import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { VscClose } from 'react-icons/vsc';
import { RxHamburgerMenu } from 'react-icons/rx';

export const BurgerMenuStyles = {
 bmBurgerButton: {
  position: 'absolute',
  width: '32px',
  height: '32px',
  left: '32px',
  top: '32px',
 },
 bmBurgerBarsHover: {
  color: '#bb9d55',
 },
 bmCrossButton: {
  height: '32px',
  width: '32px',
  top: '-5px',
  left: '32px',
 },
 bmMenuWrap: {
  height: '100vh',
  width: '100%',
 },
 bmMenu: {
  background: '#FFF',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '-30px',
  position: 'absolute',
  width: '100%',
 },
 bmOverlay: {
  background: 'rgba(0, 0, 0, 0.3)',
 },
};

export const HeaderStyled = styled.header`
 ${'' /* position: sticky; */}
 top: 0;
 z-index: 2;
 left: 0;
 right: 0;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 padding: 30px;
 flex-wrap: wrap;
 transition: all 0.2s ease;
 background-color: #fff;
`;

export const Menu = styled.div`
 position: relative;
 width: 100%;
 height: 100%;
 overflow: hidden auto;
 overflow-y: ${({ isOpen }) => (isOpen ? 'hidden' : 'auto')};
`;

export const Open = styled(RxHamburgerMenu)``;
export const Close = styled(VscClose)``;

export const MenuList = styled.ul`
 padding-top: 43vh;
 padding-left: 0;
 display: flex !important;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 60px;
 @media screen and (min-width: 768px) {
  padding-top: 23vh;
  gap: 20px;
 }
 @media screen and (max-width: 992px) {
  padding-top: 10vh;
 }
`;

export const MenuItem = styled.li`
 color: black;
 line-height: 1;
 font-size: 2rem;
 display: inline-block;
 padding: 4px 0px;
 text-decoration: none;
 text-align: start !important;
 font-family: 'Sulphur Point', sans-serif;
 @media screen and (min-width: 768px) {
  font-size: 4.8vw;
 }
`;

export const MenuLink = styled(Link)`
 color: black;
 transition: color 250ms cubic-bezier(0, 0, 0.58, 1) 0s;
 &:hover {
  color: #bb9d55;
 }
`;

export const BurgerMenuContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`;
