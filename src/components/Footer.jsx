import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f1f1f1', padding: '20px', textAlign: 'center' }}>
      <div>
        <h1>This is a footer</h1>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <p>1234 Main Street, Anytown, USA</p>
        <div>
          <a href="/privacy-policy">Privacy Policy</a> | 
          <a href="/terms-of-service">Terms of Service</a> | 
          <a href="/contact-us">Contact Us</a>
        </div>
        <div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
