// pages/posts.tsx
import React from 'react';
import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p>Welcome to the Posts page.</p>
      </main>
    </>
  );
};

export default PostsPage;
