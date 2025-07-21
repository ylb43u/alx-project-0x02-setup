// components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '1rem', background: '#f4f4f4' }}>
      <h1>My Website</h1>
      <nav style={{ marginTop: '0.5rem' }}>
        <Link href="/home" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
