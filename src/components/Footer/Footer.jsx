import { FooterWrapp } from './Footer.styled';

function Footer() {
 return (
  <FooterWrapp fluid={true}>
   <p>
    © <strong>🇺🇦 Ostrynska Kateryna</strong> 2022-{new Date().getFullYear()}.
    All rights are reserved{' '}
   </p>
  </FooterWrapp>
 );
}

export default Footer;
