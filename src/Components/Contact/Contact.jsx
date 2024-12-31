import React, { useState } from 'react'; // Import useState
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const response = await fetch('https://formspree.io/f/xlderwyl', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmissionStatus('Thank you for your submission!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setSubmissionStatus('There was a problem with your submission.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <FaEnvelope size={24} /> 
                        <p>isaacubakama@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <FaPhone size={24} />
                        <p>+2349013711998</p>
                    </div>
                    <div className="contact-detail">
                        <FaMapMarkerAlt size={24}/>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div> 
            </div>
            <form className='contact-right' onSubmit={handleSubmit}>
              <label htmlFor='name'>Your Name</label>
              <input type="text" placeholder='Enter your name' name='name' id='name' value={formData.name} onChange={handleChange} required/>
              
              <label htmlFor="email">Your Email</label>
              <input type="email" placeholder='Enter your email'  id="email" name="email" value={formData.email} onChange={handleChange} required />
              
              <label htmlFor="message">Write your message</label>
              <textarea name="message" rows="8" placeholder='Enter Your Message'  id="message" value={formData.message} onChange={handleChange} required ></textarea>
              
              <button type='submit' className='contact-submit' disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Now'}
              </button>
              
              {submissionStatus && <p className="submission-status">{submissionStatus}</p>} {/* Display submission status */}
            </form>
        </div>
    </div>
  );
};
