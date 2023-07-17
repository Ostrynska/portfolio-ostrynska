import styled from 'styled-components';

import { TbBrandGithubFilled } from 'react-icons/tb';
import { PiMonitorFill } from 'react-icons/pi';

export const Container = styled.div`
 ${'' /* height: 90vh; */}
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

export const Content = styled.div``;

export const FilterList = styled.ul`
 align-items: center;
 column-gap: 0.75rem;
 display: flex;
 justify-content: center;
`;

export const FilterItem = styled.li`
 background: white;
 border: 2px solid black;
 color: black;
 padding: 4px 19px;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);

 &:hover {
  color: black;
  background: transparent;
  border: 2px solid #bb9d55;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 }

 &.active {
  color: #bb9d55;
  background: transparent;
  border: 2px solid #bb9d55;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 }
`;

export const FilterButton = styled.button`
 text-transform: capitalize;

 font-family: 'Raleway', sans-serif;
 font-size: 1rem;
 font-weight: 400;
 line-height: 1.5;
 text-align: center;
`;

export const List = styled.ul`
 margin: 50px 0;

 display: flex;
 flex-wrap: wrap;
 align-item: center;
 justify-content: center;
 gap: 40px;
`;

export const Item = styled.li`
 display: flex;
 flex-direction: column;
 aligh-item: center;
 box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
 padding: 2rem;
 border: 1px solid rgba(0, 0, 0, 0.1);
 height: auto;
 max-width: 100%;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);

 &:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
   rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
   rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 }
 img {
  border-radius: 0.5rem;
  width: 295px;
  max-height: 170px;
 }
 p {
  font-size: 14px;
  max-width: 295px;
  margin: 1rem 0 0.5rem 0;
  font-family: 'Raleway', sans-serif;
 }
 h2 {
  font-size: 24px;
  font-weight: 800;
  font-family: 'Sulphur Point', sans-serif;
 }
`;

export const Git = styled(TbBrandGithubFilled)`
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
 &:hover {
  color: #bb9d55;
 }
`;

export const Link = styled(PiMonitorFill)`
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
 &:hover {
  color: #bb9d55;
 }
`;

export const ItemTitleWrap = styled.div`
 margin: 20px 0 0 0;
 display: flex;
 align-items: center;
`;
export const LinksWrap = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
 margin-left: auto;
 a {
  display: flex;
  justify-content: center;
 }
`;

export const Line = styled.hr`
 margin: 0.25rem 0;

 border-top: 1px solid #000;
 opacity: 0.25;
`;

export const Tools = styled.ul`
 margin-top: auto;
 li {
  display: flex;
  gap: 10px;
  img {
   max-width: 20px;
   height: 20px;
  }
 }
`;

export const Image = styled.div`
 height: 170px;
 display: flex;
 align-items: center;
`;
