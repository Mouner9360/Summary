import React, { useState } from 'react';
import './styles.css';

// fileforcode.jsx

export default function Fileupload(){
  const [fileContent, setFileContent] = useState('');
  const [fileName, setFileName] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
      setInputValue(event.target.value);
    };

  //gets reads file and sets its content to State
  function handleFileChange(e){
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      setFileContent(event.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <div className="home-container">
      {/* //getuser's email */}
      <div className='email-input'>
        <label>
          Add your email:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter text here"
        />
        </label>
      </div>
      <h3 className="home-subtitle">Upload and view the audio file content</h3>
      <div className="file-part">
      <input
        type="file"
        accept=".txt,.md,.json"
        onChange={handleFileChange}
        className="file-input"
      />
      {fileName && <div className="file-name">File: {fileName}</div>}
      </div>
      <textarea
        className="file-content-box"
        value={fileContent}
        readOnly
        placeholder="File content will appear here..."
      />
    </div>
  );
};