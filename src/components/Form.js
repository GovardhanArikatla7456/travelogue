import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const StyledTextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResponseMessage = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`;

const Form = ({ onPostCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [showResponse, setShowResponse] = useState(false); // State to track response message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://ec2-3-80-84-41.compute-1.amazonaws.com:8000/api/posts/', {
        name,
        description,
        location,
      });
      setShowResponse(true); // Set state to show response message
      onPostCreated();
      setName('');
      setDescription('');
      setLocation('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <StyledTextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <StyledInput
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      {showResponse && <ResponseMessage>Post added!</ResponseMessage>}
    </>
  );
};

export default Form;
