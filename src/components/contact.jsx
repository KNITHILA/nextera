import { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>Want something like this for your brand or product? Let’s build it.</p>
        <div className="form-container">
          {!isSubmitted ? (
            <form className="form" id="contact-form" onSubmit={handleSubmit}>
              <input className="input" type="text" name="name" placeholder="Your Name" required />
              <input className="input" type="email" name="email" placeholder="Email Address" required />
              <textarea className="textarea" name="message" placeholder="Tell me about your project..." required></textarea>
              <button className="submit" type="submit">Send Message</button>
            </form>
          ) : (
            <div id="form-success">
              <h3>Thanks for reaching out!</h3>
              <p>I've received your message and will get back to you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;