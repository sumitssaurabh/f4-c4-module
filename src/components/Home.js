import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);
  const [expandedPosts, setExpandedPosts] = useState({});

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const togglePostExpansion = (postId) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <div className='homeDiv'>
      <h1>Social Media For Travellers</h1>
      <ul>
        {posts.map((post) => (
            <li key={post.id}>
                <div className='imgageDiv'><img src={post.imgSrc} alt={`Post ${post.id}`} /></div>
            <h2>{post.title.slice(0, 30)}</h2>
            {expandedPosts[post.id] ? (
              <>
                <p>{post.body}</p>
                <button onClick={() => togglePostExpansion(post.id)}>Read Less...</button>
              </>
            ) : (
              <>
                <p id='readmore'>{post.body.slice(0, 100)}...</p>
                            <Link style={{ textDecoration: 'none',color:'orange'}} to={`/item/${post.id}`} onClick={() => togglePostExpansion(post.id)}>
                  Read More...
                </Link>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
