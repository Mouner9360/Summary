// import { useEffect, useState } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Summarize from './summarize';
import './styles.css';

//maybe make a component to take a demo instead of a file
export default function Fileupload(){
  const [selectedFile, setSelectedFile] = useState(null);
  const [summary, setSummary] = useState('');

  //gets file from the user
  function handleFileChange(event){
      setSelectedFile(event.target.files[0]); // For single file
      // For multiple files: setSelectedFiles(Array.from(event.target.files));

      handleUpload();// sends files to the backend
  }

  //send file to the backend
  async function handleUpload(){
      if (!selectedFile) {
        alert('Please select a file first!');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile); // 'file' is the field name expected by your backend
      
      try {
        const response = await axios.post('/upload-endpoint', formData);//add backend url
        setSummary(response)
        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
  };

  return (
    <>
      <form>
        <label htmlFor="user">File:</label>
        <input id="user" type="file" name="email" onChange={handleFileChange}/>
      </form>
      <Summarize file={summary}/>
    </>
  )
}