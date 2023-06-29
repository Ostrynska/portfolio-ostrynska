import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-top: 15px;
  flex-wrap: wrap;
  transition: all 0.2s ease;
  gap: 15px;
  background-color: #111;
`

export const LogoText = styled.p`
  font-weight: bold;
  font-size: 18px !important;
  color: #FFF;
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