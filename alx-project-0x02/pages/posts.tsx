// pages/posts.tsx
import React from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';


const PostsPage: React.FC<{posts: PostProps[]}> = ({ posts }) => {
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

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    userId: post.userId,
    title: post.title,
    content: post.body,
  }));

  return {
    props: {
      posts,
    },
    revalidate: 60, // optional: re-generate the page every 60 seconds
  };
}

export default PostsPage;
