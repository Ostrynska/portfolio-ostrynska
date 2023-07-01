import React, { useState } from 'react';

import * as emailjs from 'emailjs-com';
import { Alert } from 'react-bootstrap';

import { contactConfig } from '../../contentOption';

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
 FormWrapp,
 Form,
 FormInputs,
 Input,
 InputStyled,
 Button,
} from './Contact.styled';

const Contact = () => {
 const [formData, setFormdata] = useState({
  email: '',
  name: '',
  message: '',
  loading: false,
  show: false,
  alertmessage: '',
  variant: '',
 });

 const handleSubmit = e => {
  e.preventDefault();
  setFormdata({ loading: true });

  const templateParams = {
   from_name: formData.email,
   user_name: formData.name,
   to_name: contactConfig.YOUR_EMAIL,
   message: formData.message,
  };

  emailjs
   .send(
    contactConfig.YOUR_SERVICE_ID,
    contactConfig.YOUR_TEMPLATE_ID,
    templateParams,
    contactConfig.YOUR_USER_ID
   )
   .then(
    result => {
     console.log(result.text);
     setFormdata({
      loading: false,
      alertmessage: 'SUCCESS! ,Thankyou for your messege',
      variant: 'success',
      show: true,
     });
    },
    error => {
     console.log(error.text);
     setFormdata({
      alertmessage: `Faild to send!,${error.text}`,
      variant: 'danger',
      show: true,
     });
     //  document.getElementsByClassName('co_alert')[0].scrollIntoView();
    }
   );
 };

 const handleChange = e => {
  setFormdata({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 return (
  <div>
   {/* <Alert
    //show={formData.show}
    variant={formData.variant}
    // className={`rounded-0 co_alert ${formData.show ? 'd-block' : 'd-none'}`}
    onClose={() => setFormdata({ show: false })}
    dismissible
   >
    {' '}
    <p>{formData.alertmessage}</p>
   </Alert> */}

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
        the Contact Form OR simply click on the social media icon if you are
        more comfortable there.
       </p>
      </Text>
     </TextWrapp>

     <FormWrapp>
      <Form onSubmit={handleSubmit}>
       <FormInputs>
        <Input
         id="name"
         name="name"
         placeholder="Name"
         type="text"
         required
         value={formData.name || ''}
         onChange={handleChange}
        />
        <Input
         id="email"
         name="email"
         placeholder="Email"
         type="email"
         required
         value={formData.email || ''}
         onChange={handleChange}
        />
       </FormInputs>
       <InputStyled
        id="message"
        name="message"
        placeholder="Message"
        rows={5}
        spellCheck="false"
        required
        value={formData.message}
        onChange={handleChange}
       ></InputStyled>
       <Button type="submit">{formData.loading ? 'Sending...' : 'Send'}</Button>
      </Form>
     </FormWrapp>
    </Content>
   </Container>
   {/* <div className={formData.loading ? 'loading-bar' : 'd-none'}></div> */}
  </div>
 );
};

export default Contact;
