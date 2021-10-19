import { useRef } from 'react';

import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {

  const emailValue = useRef();

  async function registrationHandler(event) {
    event.preventDefault();
    const email = emailValue.current.value;

    const registration = await fetch(`/api/newslatter`, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await registration.json();

    console.log(data);
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailValue}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
