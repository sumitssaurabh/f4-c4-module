// src/components/Detail.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
      <div>
          <img src={post.imgSrc} alt={`Post ${post.id}`} />
      <h1>Detail</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
    </div>
  );
};

export default Detail;
