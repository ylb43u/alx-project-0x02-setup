// components/common/PostCard.tsx
import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <span className="text-sm text-gray-500">Posted by User #{userId}</span>
    </div>
  );
};

export default PostCard;
