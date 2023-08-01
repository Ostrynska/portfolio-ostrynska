import styled, { css } from 'styled-components';

export const Container = styled.div`
 min-height: 90vh;
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
 flex-direction: column;
 gap: 50px;
 padding: 0 0 0 60px;
 @media screen and (min-width: 580px) and (max-width: 629px) {
  padding: 0 0 0 40px;
 }
 @media screen and (min-width: 630px) and (max-width: 679px) {
  padding: 0 0 0 20px;
 }
 @media screen and (min-width: 680px) {
  padding: 0;
 }
 @media screen and (min-width: 768px) and (max-width: 850px) {
  padding: 0 0 0 40px;
 }
 @media screen and (min-width: 992px) {
  flex-direction: row;
  gap: 0;
 }
 @media screen and (min-width: 992px) and (max-width: 1000px) {
  padding: 0 0 0 60px;
 }
 @media screen and (min-width: 1001px) and (max-width: 1099px) {
  padding: 0 0 0 40px;
 }
 @media screen and (min-width: 1100px) {
  padding: 0;
 }
`;

export const TextWrapp = styled.div`
 max-width: 100%;
 padding-left: calc(0 * 0.5);
 padding-right: calc(0 * 0.5);
 @media screen and (min-width: 992px) {
  width: 41.66666667%;
 }
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
 gap: 1.5rem;
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

export const FormWrapp = styled.div`
 display: flex;
 max-width: 100%;
 align-items: flex-end;
 padding-left: 0;
 margin-bottom: 40px;
 @media screen and (min-width: 768px) {
  margin-bottom: 0;
 }
 @media screen and (min-width: 992px) {
  padding-left: calc((1.5rem * 0.5) * 4);
  width: 58.33333333%;
 }
`;

export const Form = styled.form`
 width: 100%;
`;

export const FormInputs = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: calc(1.5rem * -1);
 margin-bottom: 1em;
 gap: calc((0.5rem * 0.5) * 2);
 @media screen and (min-width: 480px) {
  flex-direction: row;
  gap: calc((1.5rem * 0.5) * 2);
 }
`;

export const Input = styled.input`
 height: calc(1.5em + 0.75rem + 2px);

 background-color: transparent;
 border: 1px solid #000;
 border-radius: 0;
 color: #000;
 line-height: 1.5;
 padding: 1.375rem 0.75rem;

 font-family: 'Raleway', sans-serif;
 font-size: 1rem;
 font-weight: 400;
 transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
 width: 100%;
 ::placeholder {
  font-family: 'Raleway', sans-serif;
 }
 &:hover,
 &:focus {
  border-color: #bb9d55;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 }
`;

export const InputStyled = styled.textarea`
 resize: none;
 min-height: calc(1.5em + 0.75rem + 2px);
 margin-bottom: 1em;

 background-color: transparent;
 border: 1px solid #000;
 border-radius: 0;
 color: #000;
 line-height: 1.5;
 padding: 1.375rem 0.75rem;

 font-family: 'Raleway', sans-serif;
 font-size: 1rem;
 font-weight: 400;
 transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
 width: 100%;
 ::placeholder {
  font-family: 'Raleway', sans-serif;
 }
 &:hover,
 &:focus {
  border-color: #bb9d55;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  outline: none;
 }
`;

export const Button = styled.button`
 font-family: 'Raleway', sans-serif;

 border: 2px solid #000;
 border-radius: 0;
 color: #000;
 overflow: hidden;
 padding: 4px 19px;
 position: relative;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
 &:hover {
  background: transparent;
  border: 2px solid #bb9d55;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 }
`;

export const ModalCloseButton = styled.button`
 border: none;
 width: 12px;
 height: 12px;
 position: absolute;
 top: 15px;
 right: 18px;
 cursor: pointer;
 background-color: transparent;
 ${
  '' /* @media (min-width: 478px) {
  width: 14px;
  height: 14px;
  top: 24px;
  right: 24px;
 } */
 }
`;
export const Message = styled.div`
 display: flex;
 flex-direction: column;
`;

export const MessageStatus = styled(TextWrappTitle)`
 ${props =>
  props.$success &&
  css`
   color: green;
  `}
 ${props =>
  props.$error &&
  css`
   color: red;
  `}
`;

export const MessageStatusText = styled(Text)``;
