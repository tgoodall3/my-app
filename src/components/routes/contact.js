import React from 'react';
import Form from '../reUseable/form';
import Navbar from '../Navbar';
import Footer from '../footer';
import '../../styles/contact.css';

function Contact() {
  return (
    <div className='Contact'>
      <Navbar />
      <Form />
      <br></br>
      <Footer />
    </div>
  );
}

export default Contact;