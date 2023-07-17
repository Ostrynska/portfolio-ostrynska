import styled from 'styled-components';

import { Container } from 'react-bootstrap';

export const FooterWrapp = styled(Container)`
 font-family: 'Sulphur Point', sans-serif;
 text-align: center;
 font-size: medium;
 color: black;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 p {
  @media screen and (max-width: 436px) {
   font-size: 14px;
  }
 }
`;
