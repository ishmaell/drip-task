import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Posts from './components/posts';

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Posts />
    </QueryClientProvider>
  );
}

export default App;
