// pages/about.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <p className="mb-6">This page demonstrates reusable buttons using Tailwind:</p>

        <div className="flex gap-4">
          <Button title="Small" size="small" shape="rounded-sm" />
          <Button title="Medium" size="medium" shape="rounded-md" />
          <Button title="Large" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
