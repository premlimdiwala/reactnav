import React from 'react';

function ThemeToggle({ toggleTheme, theme }) {
    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: 'none',
        fontSize: '1.5em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    };

    const lightThemeStyle = {
        backgroundColor: '#222',
        color: '#fff',
    };

    const darkThemeStyle = {
        backgroundColor: '#fff',
        color: '#222',
    };

    const currentStyle = theme === 'light' ? lightThemeStyle : darkThemeStyle;

    const hoverStyle = {
        ...buttonStyle,
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
    };

    const activeStyle = {
        ...buttonStyle,
        transform: 'scale(0.95)',
    };

    const finalStyle = {
        ...buttonStyle,
        ...currentStyle,
    };

    return (
        <button
            style={finalStyle}
            onClick={toggleTheme}
        >
            {theme === 'light' ? '🌙' : '🌞'} 
        </button>
    );
}

export default ThemeToggle;
