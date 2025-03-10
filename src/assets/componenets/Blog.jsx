import React, { useState } from 'react';

function blog() {
  const [posts] = useState([
    {
      title: 'The Power of React',
      author: 'John Doe',
      date: '2025-03-10',
      content: 'React is a powerful JavaScript library for building user interfaces...'
    },
    {
      title: 'Understanding State and Props',
      author: 'Jane Smith',
      date: '2025-03-09',
      content: 'In React, state and props are the heart of data management...'
    },
    {
      title: 'JavaScript ES6 Features You Should Know',
      author: 'Emma Brown',
      date: '2025-03-08',
      content: 'ES6 introduced several important features to JavaScript, such as arrow functions, promises, and destructuring...'
    }
  ]);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f7fc',
      padding: '20px',
    },
    blogContainer: {
      width: '100%',
      maxWidth: '800px',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    postCard: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
    postTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
    },
    postMeta: {
      fontSize: '14px',
      color: '#999',
      marginBottom: '10px',
    },
    postContent: {
      fontSize: '16px',
      color: '#444',
      lineHeight: '1.6',
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
      <div style={styles.blogContainer}>
        <h1 style={{ textAlign: 'center' }}>Blog</h1>

        {posts.map((post, index) => (
          <div key={index} style={styles.postCard}>
            <h2 style={styles.postTitle}>{post.title}</h2>
            <p style={styles.postMeta}>
              <span>{post.author}</span> | <span>{post.date}</span>
            </p>
            <p style={styles.postContent}>{post.content}</p>
          </div>
        ))}
      </div>

      <footer style={styles.footer}>
        <p>&copy; 2025 Blog Site. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default blog