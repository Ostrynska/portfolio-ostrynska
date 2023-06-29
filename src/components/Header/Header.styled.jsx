import styled from 'styled-components';

import { VscClose } from 'react-icons/vsc';
import { RxHamburgerMenu } from 'react-icons/rx';

export const Open = styled(RxHamburgerMenu)`
 width: 2rem;
 height: 2rem;
 &:hover {
  color: #bb9d55;
 }
`;
export const Close = styled(VscClose)`
 width: 2rem;
 height: 2rem;
`;

export const HeaderStyled = styled.header`
 height: 5vh;
 position: sticky;
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
 ${'' /* gap: 15px; */}
 background-color: #FFF;
`;

export const MenuWrapp = styled.div`
 height: 100%;
 left: 0;
 overflow: hidden;
 position: fixed;
 top: 0;
 width: 100%;
 visibility: hidden;

 &.active {
  visibility: visible !important;
 }
`;

export const Button = styled.button`
 all: unset;
`;
// export const MenuBg= styled.div`
//     position: absolute;
//     left: 0px;
//     top: 0px;
//     width: 100%;
//     height: 100%;
//     background-color: #ffffff;
//     will-change: transform;
//     transform: translateY(-100%);
//     transition: .5s ease all;
//      &.active {transform: translateY(0);}
// `
