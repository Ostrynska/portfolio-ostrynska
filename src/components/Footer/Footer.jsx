import {
  Row,
  Col,
} from 'react-bootstrap';

import {FooterWrapp} from "./Footer.styled"

function Footer() {
  return (
    <FooterWrapp fluid={true}>
      <Row>
        <Col xl={12}>
        Copyright © {(new Date().getFullYear())} All rights are reserved <strong>Ostrynska Kateryna</strong>
        </Col>
      </Row>
    </FooterWrapp>
  );
}

export default Footer;