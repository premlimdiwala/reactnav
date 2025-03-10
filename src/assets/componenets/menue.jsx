import React from 'react'

function menue() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f7fc',
      padding: '20px',
    },
    aboutContainer: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '800px',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#333',
    },
    paragraph: {
      fontSize: '16px',
      color: '#444',
      lineHeight: '1.8',
      marginBottom: '20px',
    },
    subHeading: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginTop: '30px',
      marginBottom: '10px',
    },
    list: {
      listStyleType: 'circle',
      marginLeft: '20px',
    },
    footer: {
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '14px',
      color: '#888',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.aboutContainer}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.paragraph}>
          Welcome to our website! We are a dedicated team of passionate developers committed to building awesome applications.
          Our goal is to provide the best user experience with each of our projects. We focus on innovation, simplicity, and
          making the web a better place.
        </p>
        <h2 style={styles.subHeading}>Our Mission</h2>
        <p style={styles.paragraph}>
          Our mission is to create products that make life easier and more enjoyable for our users. We strive to push the
          boundaries of what's possible and deliver high-quality solutions for all.
        </p>
        <h2 style={styles.subHeading}>Our Values</h2>
        <ul style={styles.list}>
          <li>Innovation: We continuously look for new ways to improve our solutions.</li>
          <li>Quality: We prioritize quality and attention to detail in everything we do.</li>
          <li>Customer-centric: Our users' satisfaction is our top priority.</li>
          <li>Collaboration: We believe in the power of teamwork and open communication.</li>
        </ul>
      </div>
   
    </div>
  );
}

export default menue








