import styled, { css } from 'styled-components';

export const HomeWrapp = styled.div`
 ${'' /* margin: 150px 0 150px; */}
 min-height: 92vh;
 justify-content: center;
 display: flex;
 padding: 0 80px;
 @media screen and (min-width: 768px) {
  margin: 0;
  min-height: 92vh;
  gap: 25px;
 }
 @media screen and (min-width: 1220px) {
  gap: 150px;
 }
`;

export const HomeMain = styled.div`
 height: 100%;
 align-self: center;
 max-width: 450px;
 display: flex;
 flex-direction: column;
 justify-content: center;
`;

export const HomeMainCol = styled.div`
 display: block;
`;

export const Title = styled.h1`
 font-family: 'Sulphur Point', sans-serif;
 font-size: 42px;
 font-weight: 300;
 line-height: 1.2;
 margin-bottom: 0.5rem;
`;
export const TitlePosition = styled.h2`
 position: relative;
 font-family: 'Sulphur Point', sans-serif;
 font-size: 22px;
 font-weight: 300;
 line-height: 1.2;
 margin-bottom: 0.5rem;
 padding-left: 5.4rem;
 color: #bb9d55;

 &::before {
  content: '';
  position: absolute;
  width: 70px;
  height: 1px;
  background-color: #bb9d55;
  left: 0;
  top: 1rem;
 }
`;

export const PreTitle = styled.h3`
 font-size: 24px;
 font-weight: 700;
 margin-bottom: 50px;
 line-height: 1.2;
 margin-top: 0;
`;

export const Text = styled.p`
 font-family: 'Raleway', sans-serif;
`;

export const ButtonWrapp = styled.div`
 margin-top: 16px;

 ul {
  display: flex;
  gap: 20px;
  @media screen and (max-width: 436px) {
   flex-wrap: wrap;
   gap: 5px;
  }
 }
`;

export const Button = styled.a`
min-width: 130px;

 background: black;
 border-radius: 0px;
 border: 2px solid black;
 color: white;
 display: inline-block;
 padding: 4px 19px;
 overflow: hidden;
 transition: all .6s cubic-bezier(.55,0,.1,1)

 font-family: 'Raleway', sans-serif;
 font-size: 1rem;
 font-weight: 400;
 line-height: 1.5;
 text-align: center;

 &:hover {
  color: white;
  background: #bb9d55;
  border: 2px solid #bb9d55;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 }

 ${props =>
  props.$primary &&
  css`
   background: white;
   color: black;

   &:hover {
    color: black;
    background: transparent;
    border: 2px solid #bb9d55;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   }
  `}
`;

export const ImageWrapp = styled.div`
 display: none;
 @media screen and (min-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
 }
`;
