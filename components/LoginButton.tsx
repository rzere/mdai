// components/LoginButton.tsx
import React from 'react';

const LoginButton = () => {
  const handleLogin = async () => {
    // Replace 'username' with the actual username of the logged-in user
    const username = 'exampleUser';

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        console.log('Login logged successfully');
      } else {
        console.error('Failed to log login');
      }
    } catch (error) {
      console.error('Error logging login:', error);
    }
  };

  return (
    <button onClick={handleLogin}>Log In</button>
  );
};

export default LoginButton;