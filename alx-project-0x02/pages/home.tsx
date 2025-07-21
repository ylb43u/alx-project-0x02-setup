// pages/home.tsx
import React from 'react';
import Header from '../components/layout/Header';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Home Page</h1>
        <p>Welcome to the home page.</p>
      </main>
    </>
  );
};

export default HomePage;
