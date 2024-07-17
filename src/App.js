import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/List';
import Form from './components/Form';
import SearchByLocation from './components/SearchByLocation';

const App = () => (
  <div>
    <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<Form onPostCreated={() => window.location.reload()} />} />
        <Route path="/search" element={<SearchByLocation />} />
      </Routes>
  </div>
);

export default App;
