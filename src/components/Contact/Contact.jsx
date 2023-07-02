import React, { useState } from 'react';

import * as emailjs from 'emailjs-com';
import Modal from 'react-modal';

import { RxCross1 } from 'react-icons/rx';

import { contactConfig, customModalStyles } from '../../contentOption';

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
 ModalCloseButton,
 Button,
 Message,
 MessageStatus,
 MessageStatusText,
} from './Contact.styled';

const Contact = () => {
 const [formData, setFormdata] = useState({
  email: '',
  name: '',
  message: '',
  loading: false,
  modalOpen: false,
 });

 const handleSubmit = e => {
  e.preventDefault();
  setFormdata({ ...formData, loading: true });

  const templateParams = {
   from_name: formData.name,
   user_email: formData.email,
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
      ...formData,
      loading: false,
      modalOpen: true,
      alertmessage: (
       <Message>
        <MessageStatus $success>Message delivered! ✅</MessageStatus>
        <MessageStatusText>
         Thank you! Your message was sent successfully.
        </MessageStatusText>
       </Message>
      ),
      variant: 'success',
     });
    },
    error => {
     console.log(error.text);
     setFormdata({
      ...formData,
      modalOpen: true,
      alertmessage: (
       <Message>
        <MessageStatus $error>Message not delivered! 💥</MessageStatus>
        <MessageStatusText>
         Sorry. Your message was unable to send.
        </MessageStatusText>
       </Message>
      ),
      variant: 'danger',
     });
    }
   );
  setFormdata({ ...formData, email: '', name: '', message: '' });
 };

 const handleChange = e => {
  setFormdata({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const closeModal = () => {
  setFormdata({
   ...formData,
   modalOpen: false,
   email: '',
   name: '',
   message: '',
  });
 };

 return (
  <div>
   <Modal
    isOpen={formData.modalOpen}
    onRequestClose={closeModal}
    style={customModalStyles}
    shouldCloseOnOverlayClick={true}
    contentLabel="Message Modal"
   >
    <p>{formData.alertmessage}</p>
    <ModalCloseButton onClick={closeModal}>
     <RxCross1 />
    </ModalCloseButton>
   </Modal>

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
       <p>Hola Visitor!</p>
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
   <div className={formData.loading ? 'loading-bar' : 'd-none'}></div>
  </div>
 );
};

export default Contact;
