// pages/posts.tsx
import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await res.json();

      const formattedPosts = data.map((post: any) => ({
        userId: post.userId,
        title: post.title,
        content: post.body,
      }));

      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">Posts Page</h1>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default PostsPage;
