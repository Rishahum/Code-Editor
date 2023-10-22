import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard');
    });
  };
  const handleSaveClick = () => {
    // Save code to local storage as JSON
    localStorage.setItem('savedCode', JSON.stringify({ code }));
    alert('Code saved');
  };
  // const handleSaveClick = () => {
  //   alert('Code saved');
  // };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  const editorOptions = {
    selectOnLineNumbers: true,
    roundedSelection: true,
    readOnly: isLocked,
    cursorBlinking: 'blink',
    automaticLayout: true,
    wordWrap: 'on',
    tabSize: 2,
    tokenClass: 'my-custom-font-color',
  };

  return (
    <div>
      <div>
        <button onClick={handleCopyClick}>Copy</button>
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={toggleLock}>{isLocked ? 'Unlock' : 'Lock'}</button>
      </div>
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={editorOptions}
        onChange={(newValue) => {
          if (!isLocked) {
            setCode(newValue);
          }
        }}
      />
    </div>
  );
};

export default CodeEditor;



