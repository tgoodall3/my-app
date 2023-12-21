import "../../styles/form.css";
import React from 'react';
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';

function Form() {

  const {register, handleSubmit, formState: errors } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    emailjs.sendForm('service_bhwkbq6', 'template_m47j07h', e.target, 'hhnZJafdr_Rqdg3tK')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className='Form'>
        <h1>Lets Connect!</h1>
      <form className="contact" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input type="text" name="from_name" {...register('from_name', { required: true })} placeholder= 'Name'/>
        </label>
        <label>
          Email:
          <input type="text" name="from_email" {...register('from_email', { required: true })} placeholder="Your Email"  />
        </label>
        <label>
          Message:
          <input type="textarea" name="message" {...register('message', { required: true })} placeholder="Your Message"/>
        </label>
        {errors.message && 'A message is required'}
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
