import styled from 'styled-components';

import { Container } from 'react-bootstrap';

export const FooterWrapp = styled(Container)`
 font-family: 'Sulphur Point', sans-serif;
 text-align: center;
 font-size: medium;
 color: black;
 ${'' /* color: rgb(202, 200, 200); */}
 p {
  @media screen and (max-width: 436px) {
   font-size: 14px;
  }
 }
`;
