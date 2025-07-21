// pages/index.tsx
import React from 'react';
import Header from '../components/layout/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>Welcome to My Website</h2>
        <p>This is the home page built with Next.js.</p>
      </main>
    </>
  );
};

export default Home;
