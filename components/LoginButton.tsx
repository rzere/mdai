// components/LoginButton.tsx
import React from 'react';

const LoginButton = () => {
  const handleLogin = async () => {
    const email = 'exampleUser';

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
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