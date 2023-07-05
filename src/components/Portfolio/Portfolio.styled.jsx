import styled, { css } from 'styled-components';

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

export const List = styled.ul`
 display: flex;
 flex-wrap: wrap;
 align-item: center;
 justify-content: center;
 gap: 40px;
`;

export const Item = styled.li`
 width: 530px;
 height: 285px;
 p {
  font-size: 14px;
 }
`;

export const FilterList = styled.ul`
 align-items: center;
 column-gap: 0.75rem;
 display: flex;
 justify-content: center;
 margin-bottom: 2rem;
`;

export const FilterItem = styled.li``;
