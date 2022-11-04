import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const Posts = () => {
  const { isLoading, data } = useQuery(['posts'], () => {
    Axios.get(
      'https://jsonplaceholder.typicode.com/posts?_start=10&amp;_limit=5'
    ).then((res) => res.data);
  });
  return <p>Testing...</p>;
};

export default Posts;
