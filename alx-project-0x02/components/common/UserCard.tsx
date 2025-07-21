// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="mb-1"><strong>Email:</strong> {email}</p>
      <p>
        <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
