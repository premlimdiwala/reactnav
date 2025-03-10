import { useEffect, useState } from 'react';


function Login() {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
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
      if (isSignup) {
        console.log('Signup data:', formData);
      } else {
        console.log('Login data:', formData);
      }
    };
  
    const toggleForm = () => {
      setIsSignup(!isSignup);
    };
  
    const styles = {
      authContainer: {
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
        width: '300px',
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
      authBtn: {
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
      authBtnHover: {
        backgroundColor: '#45a049',
      },
      toggleText: {
        textAlign: 'center',
        marginTop: '10px',
      },
      toggleLink: {
        color: '#007bff',
        cursor: 'pointer',
        fontWeight: 'bold',
      },
      toggleLinkHover: {
        textDecoration: 'underline',
      },
    };
  
    return (
      <div style={styles.authContainer}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>{isSignup ? 'Sign Up' : 'Log In'}</h2>
          <form onSubmit={handleFormSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="username">Username:</label>
              <input
                style={styles.input}
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
  
            {isSignup && (
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
            )}
  
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="password">Password:</label>
              <input
                style={styles.input}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
  
            <button
              type="submit"
              style={styles.authBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.authBtnHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#4caf50')}
            >
              {isSignup ? 'Sign Up' : 'Log In'}
            </button>
          </form>
  
          <p style={styles.toggleText}>
            {isSignup ? 'Already have an account? ' : "Don't have an account? "}
            <span
              style={styles.toggleLink}
              onClick={toggleForm}
              onMouseOver={(e) => (e.target.style.textDecoration = styles.toggleLinkHover.textDecoration)}
              onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
            >
              {isSignup ? 'Log In' : 'Sign Up'}
            </span>
          </p>
        </div>
      </div>
    );
  }

export default Login






// 


