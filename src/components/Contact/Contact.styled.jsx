import styled from 'styled-components';

export const Container = styled.div`
 height: 90vh;
 margin-left: auto;
 margin-right: auto;

 padding-left: 12px;
 padding-right: 12px;
 @media screen and (min-width: 576px) {
  max-width: 540px;
 }
 @media screen and (min-width: 768px) {
  max-width: 720px;
 }
 @media screen and (min-width: 992px) {
  max-width: 960px;
 }
 @media screen and (min-width: 1400px) {
  max-width: 1200px;
 }
`;

export const TitleWrapp = styled.div`
 margin-top: 2rem;
 mardin-bottom: 4rem;
`;

export const Title = styled.h1`
 margin-bottom: 1.5rem;
 font-size: calc(1.475rem + 2.7vw);
 font-weight: 500;
 line-height: 1.2;
 font-family: 'Sulphur Point', sans-serif;
`;

export const TitleLine = styled.hr`
 margin: 1.5rem 0;

 border-top: 1px solid #000;
 opacity: 0.25;
`;

export const Content = styled.div`
 display: flex;
 flex-wrap: wrap;
`;

export const TextWrapp = styled.div`
 width: 41.66666667%;
 max-width: 100%;
 padding-left: calc(0 * 0.5);
 padding-right: calc(0 * 0.5);
`;

export const TextWrappTitle = styled.h2`
 color: #000;

 padding-bottom: 1.5rem;
 padding-top: 1.5rem;
 font-family: 'Sulphur Point', sans-serif;
 font-size: 1.75rem;
 font-weight: 500;
 line-height: 1.2;
 margin-bottom: 0.5rem;
`;

export const TextContacts = styled.address`
 color: #000;
 font-family: 'Raleway', sans-serif;

 display: flex;
 flex-wrap: wrap;
 gap: 1rem;
 margin-bottom: 2rem;

 a {
  &:hover {
   color: #bb9d55;
  }
 }

 strong {
  color: #000;
 }
`;

export const Text = styled.p`
 display: flex;
 flex-direction: column;
 gap: 10px;

 font-family: 'Raleway', sans-serif;
`;
