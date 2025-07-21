// components/common/Card.tsx
import { type CardProps } from '@/interfaces';
import React from 'react';


const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
