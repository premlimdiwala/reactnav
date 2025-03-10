import { useEffect, useState } from 'react';
import './App.css';
import Blog from './assets/componenets/Blog';
import Header from './assets/componenets/header';
import Menue from './assets/componenets/Menue';
import ThemeToggle from './assets/componenets/ThemeToggle';
import Contact from './assets/componenets/Contact';
import Login from './assets/componenets/Login';

const styles = {
  light: {
    bg: "#ffffff",
    text: "#333333",
    card: "#f5f5f5",
    border: "#ddd",
  },
  dark: {
    bg: "#222222",
    text: "#f5f5f5",
    card: "#333333",
    border: "#444",
  },
};

function App() {
  const [theme, setTheme] = useState("light");
  const [activetab, setActivetab] = useState("home");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.style.backgroundColor = styles[theme].bg;
    document.body.style.color = styles[theme].text;
  }, [theme]);

  const containerStyle = {
    minWidth: "1000px",
  };

  const mainStyle = {
    backgroundColor: styles[theme].card,
    padding: "20px",
  };

  const homePageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: styles[theme].card,
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '1200px',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: styles[theme].text,
    marginBottom: '15px',
  };

  const subHeadingStyle = {
    fontSize: '1.5rem',
    color: styles[theme].text,
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: styles[theme].text,
    maxWidth: '800px',
    marginBottom: '40px',
  };

  const listStyle = {
    listStyleType: 'circle',
    paddingLeft: '20px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <Header activetab={activetab} setActivetab={setActivetab} theme={theme} />
      <main style={mainStyle}>
        {activetab === "home" && (
          <div style={homePageStyle}>
            <h1 style={headingStyle}>Welcome to Our Amazing React Website</h1>
            <p style={subHeadingStyle}>We bring the best solutions to your problems, with a modern and elegant approach.</p>
            <p style={paragraphStyle}>
              Our platform is designed to help you achieve your goals with simplicity and ease. Whether you're a beginner or an expert, we have something for everyone. 
              Explore our features below to learn more!
            </p>
            <h2 style={subHeadingStyle}>Why Choose Us?</h2>
            <ul style={listStyle}>
              <li>Easy-to-use Interface</li>
              <li>Responsive Design</li>
              <li>State-of-the-art Technology</li>
              <li>24/7 Customer Support</li>
            </ul>
            <h3 style={subHeadingStyle}>Get Started Today!</h3>
            <p style={paragraphStyle}>
              Ready to take your project to the next level? Join us today and start benefiting from our top-notch services.
            </p>
          </div>
        )}
        {activetab === "menue" && <Menue theme={theme} />}
        {activetab === "blog" && <Blog theme={theme} />}
        {activetab === "contact" && <Contact theme={theme} />}
        {activetab === "login" && <Login theme={theme} />}
      </main>
      <ThemeToggle toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
