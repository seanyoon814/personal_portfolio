import React from 'react';
import { FormWrapper, Form, Label, Input, Textarea, Button } from './FooterStyles'; // adjust path as needed
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import StarsCanvas from './Stars/Stars';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Footer = () => {
  const formRef = React.useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tvjhzrt',      
      'template_0l8nlxm',   
      formRef.current,
      'TymWUsiPCn1mFK4sg'  
    ).then(
      (result) => {
        toast.success('Message sent successfully!');
      },
      (error) => {
        toast.error('Failed to send message. Please try again later.');
      }
    );

    e.target.reset();
  };
  return (
    <>
      <Section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <StarsCanvas/>
        <SectionDivider />
        <SectionTitle main>Contact Me!</SectionTitle>
        <SectionText>Please do not hesitate to reach out <span style={{color:'white'}}>🙂</span></SectionText>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
        <FormWrapper>
          <Form ref={formRef} onSubmit={sendEmail}>
            <Label>Your Name</Label>
            <Input type="text" name="from_name" placeholder="What is your name?" required />
            <Label>Your Email</Label>
            <Input type="email" name="from_email" placeholder="What is your email address?" required />
            <Label>Your Message</Label>
            <Textarea name="message" rows="5" placeholder="What would you like to say?" required />
            <Button type="submit">Send</Button>
          </Form>
        </FormWrapper>
        </motion.div>
      </Section>
    </>
    
  );
};

export default Footer;
