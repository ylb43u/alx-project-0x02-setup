// pages/home.tsx
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import { CardProps } from '@/interfaces';
import PostModal from '@/components/common/PostModal';

const HomePage: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [post, setPost] = useState<CardProps | null >(null);
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Home Page</h1>

        <button onClick={() => setModalOpen(true)} style={{ marginBottom: '1rem' }}>
          Create New Post
        </button>

        <PostModal isOpen={isModalOpen} onClose={()=> setModalOpen(false)} onSubmit={(post:CardProps)=> setPost(post)} />

        {post && (
            <Card 
          title={post.title} 
          content={post.content}
        />
        )}
      </main>
    </>
  );
};

export default HomePage;
