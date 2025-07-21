// pages/home.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Home Page</h1>
        <Card 
          title="Welcome Card" 
          content="This is a reusable card component in the home page." 
        />
      </main>
    </>
  );
};

export default HomePage;
