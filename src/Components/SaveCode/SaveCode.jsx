import React, { useState, useEffect } from 'react';

const SaveCode = () => {
  const [storedCode, setStoredCode] = useState('');

  useEffect(() => {
    // Retrieve the saved code from local storage
    const savedCode = localStorage.getItem('savedCode');
    if (savedCode) {
      const parsedCode = JSON.parse(savedCode).code;
      setStoredCode(parsedCode);
    }
  }, []);

  return (
    <div>
      <h2>Saved Code from Local Storage</h2>
      <pre>{storedCode}</pre>
    </div>
  );
};

export default SaveCode;
