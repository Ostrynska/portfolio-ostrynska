import styled from 'styled-components';

import { GoProjectSymlink, GoLocation, GoThumbsup } from 'react-icons/go';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import {
 VscDebugBreakpointLogUnverified,
 VscSymbolNamespace,
 VscDeviceMobile,
 VscDatabase,
} from 'react-icons/vsc';

export const Container = styled.div`
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
 margin-bottom: 4rem;
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
 mardin: 50px 0;
`;
export const Projects = styled(GoProjectSymlink)`
 margin-bottom: 1rem;
 color: #bb9d55;
`;

export const Location = styled(GoLocation)`
 margin-bottom: 1rem;
 color: #bb9d55;
`;

export const Experience = styled(GoThumbsup)`
 margin-bottom: 1rem;
 color: #bb9d55;
`;

export const Document = styled(IoDocumentAttachOutline)`
 color: #bb9d55;
 animation: pulse 1s infinite;
 @keyframes pulse {
  from {
   -webkit-transform: scale3d(1, 1, 1);
   transform: scale3d(1, 1, 1);
  }

  50% {
   -webkit-transform: scale3d(1.2, 1.2, 1.2);
   transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
   -webkit-transform: scale3d(1, 1, 1);
   transform: scale3d(1, 1, 1);
  }
 }
`;

export const AboutMe = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin: 50px 0;
 div {
  display: flex;
  align-items: baseline;
  h2 {
   margin-right: 10px;
   ${'' /* font-family: 'Sulphur Point', sans-serif; */}
  }
 }
 ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  li {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   ${'' /* box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px; */}
   padding: 1.5rem;
   border: 1px solid rgba(0, 0, 0, 0.1);
   height: auto;
   width: 195px;
   h3 {
    font-size: 20px;
    font-weight: 800;
    font-family: 'Sulphur Point', sans-serif;
   }
   p {
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
   }
  }
 }
`;

export const Point = styled(VscDebugBreakpointLogUnverified)`
 color: #bb9d55;
`;
export const SkillsContainer = styled.div`
 display: flex;
 justify-content: space-between;
`;

export const Skills = styled.div`
 display: flex;
 gap: 1rem;
`;
export const SkillsWrap = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 ${'' /* box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px; */}
 padding: 1.5rem;
 border: 1px solid rgba(0, 0, 0, 0.1);
 width: 325px;
 height: auto;
 h3 {
  font-size: 20px;
  font-weight: 800;
  font-family: 'Sulphur Point', sans-serif;
 }
 ul {
  margin-top: 20px;
  grid-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  li {
   column-gap: 0.5rem;
   display: flex;
   h4 {
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
   }
   span {
    font-size: 14px;
   }
  }
 }
`;

export const Namespace = styled(VscSymbolNamespace)`
 margin-bottom: 1rem;
 color: #bb9d55;
`;

export const DeviceMobile = styled(VscDeviceMobile)`
 margin-bottom: 1rem;
 color: #bb9d55;
`;

export const Database = styled(VscDatabase)`
 margin-bottom: 1rem;
 color: #bb9d55;
`;

export const ServicesContainer = styled.div`
 display: flex;
 justify-content: space-between;
 margin: 50px 0;
 ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  li {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   ${'' /* box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px; */}
   padding: 1.5rem;
   border: 1px solid rgba(0, 0, 0, 0.1);
   height: auto;
   width: 195px;
   h3 {
    font-size: 20px;
    font-weight: 800;
    font-family: 'Sulphur Point', sans-serif;
   }
   p {
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
   }
  }
 }
`;
