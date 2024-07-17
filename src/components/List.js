import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://ec2-3-80-84-41.compute-1.amazonaws.com:8000/api/posts/');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <StyledPostList>
      <h2>All Posts</h2>
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
  );
};

export default PostList;
