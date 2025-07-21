// pages/about.tsx
import React from 'react';
import Header from '../components/layout/Header';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About Page</h1>
        <p>This page provides information about us.</p>
      </main>
    </>
  );
};

export default AboutPage;
