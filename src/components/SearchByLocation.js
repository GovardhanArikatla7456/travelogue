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

const StyledPostList = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const PostItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  h3 {
    margin: 0 0 5px;
  }

  p {
    margin: 5px 0;
  }
`;

const SearchByLocation = () => {
  const [location, setLocation] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://ec2-3-80-84-41.compute-1.amazonaws.com:8000/api/posts/location/${location}/`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div>
      <StyledForm onSubmit={handleSearch}>
        <StyledInput
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
          required
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
      <StyledPostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.description}</p>
            <p>
              <strong>Location:</strong> {post.location}
            </p>
          </PostItem>
        ))}
      </StyledPostList>
    </div>
  );
};

export default SearchByLocation;
