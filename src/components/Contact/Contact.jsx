// import { navElements } from '../../contentOption';
import {
 Container,
 TitleWrapp,
 Title,
 TitleLine,
 Content,
 TextWrapp,
 TextWrappTitle,
 TextContacts,
 Text,
} from './Contact.styled';

const Contact = () => {
 return (
  <Container>
   <TitleWrapp>
    <Title>Contact Me</Title>
    <TitleLine />
   </TitleWrapp>

   <Content>
    <TextWrapp>
     <TextWrappTitle>Get in touch</TextWrappTitle>
     <TextContacts>
      <a href="mailto:ostrynska.kateryna@gmail.com">
       <strong>Email: </strong>ostrynska.kateryna@gmail.com
      </a>

      <a href="tel:+380973676912">
       <strong>Phone: </strong>+38 097 367-69-12
      </a>
     </TextContacts>
     <Text>
      <p>Hola Visitor !</p>
      <p>
       Thank you for bumping in. If you have any queries/ideas/projects, feel
       free to PING me. I am always open to discussion. You can contact me via
       the Contact Form OR simply click on the social media icon if you are more
       comfortable there.
      </p>
     </Text>
    </TextWrapp>
    <div></div>
   </Content>
  </Container>
 );
};

export default Contact;
