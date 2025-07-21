// pages/users.tsx
import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

const UsersPage: React.FC<{users:UserProps[]}> = ({users}) => {  
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="space-y-4">
          {users.map(user => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users:UserProps[] = await res.json();

    return {
        props: {
        users,
        },
        // revalidate: 60, // optional: re-generate the page every 60 seconds
  };
}


export default UsersPage;
