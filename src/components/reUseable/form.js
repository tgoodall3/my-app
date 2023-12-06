import "../../styles/form.css";
import React from 'react';

function Form() {
  return (
    <div className='Form'>
        <h1>Lets Connect!</h1>
      <form className="contact">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message:
          <input type="text" name="message" />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
