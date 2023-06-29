import styled from 'styled-components';

import ReactTypingEffect from 'react-typing-effect';

import {
  Container,
  Row,
  Col
 } from 'react-bootstrap';

export const HomeWrapp = styled(Container)`
height: 100%;`

export const HomeMain = styled(Row)`
    height: 100%;
    text-align: center;`

export const HomeMainCol = styled(Col)`
    margin: auto;
    display: block;`

export const Title = styled.h1`
    font-size: 4.5rem;
    font-family: 'Sulphur Point', sans-serif;`

export const NextTitle = styled.h2`
    font-size: 3rem;
    font-family: 'Julius Sans One', sans-serif;`

export const Typing = styled(ReactTypingEffect)`
    font-size: 1.6rem;
    font-family: 'Sulphur Point', sans-serif;`

