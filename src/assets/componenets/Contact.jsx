import React, { useState } from 'react';


function contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    alert('Thank you for contacting us!');
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f7fc',
    },
    formContainer: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '400px',
      maxWidth: '100%',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
    },
    textArea: {
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
      height: '150px',
      resize: 'none',
    },
    submitBtn: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4caf50',
      border: 'none',
      color: 'white',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    submitBtnHover: {
      backgroundColor: '#45a049',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Contact Us</h2>
        <form onSubmit={handleFormSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">Name:</label>
            <input
              style={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="message">Message:</label>
            <textarea
              style={styles.textArea}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            style={styles.submitBtn}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.submitBtnHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#4caf50')}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default contact





