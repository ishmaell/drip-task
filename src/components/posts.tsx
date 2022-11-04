import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IPost } from '../interface/post';

function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get<IPost[]>(
        'https://jsonplaceholder.typicode.com/posts?_page=0&_limit=20'
      );
      return data;
    },
  });
}

const Posts = () => {
  const { data, error, isLoading } = usePosts();

  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="p-8">
      <div className="flex mb-10 justify-between">
        <h1 className="text-3xl font-extrabold">Posts</h1>
        <input
          className="border-[1px] w-1/2 p-2 rounded"
          placeholder="Search"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {data
          ? data.map((post) => (
              <div className="bg-white p-8 shadow-md rounded" key={post.id}>
                <h3 className="font-bold mb-3">{post.title}</h3>
                <p className="text-[15px]">{post.body}</p>
              </div>
            ))
          : null}
      </div>
    </section>
  );
};

export default Posts;
