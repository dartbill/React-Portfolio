import React from 'react';

export const ContactForm = () => {

  return (

    <>
      <h3 aria-label="greeting" id="greeting">Hi there!</h3>

      <form >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="That's not my name!" />
        <input type="submit" value="Update!" />
      </form>
    </>


  )
}
