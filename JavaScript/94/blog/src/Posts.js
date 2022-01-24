import React, { useState, useEffect } from 'react';
import Comments from './Comments';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    (async (blog) => {
      try {
        if (!posts.length) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`);
          if (!response.ok) {
            throw new Error(` ${response.statusText}`);
          }
          const theUsers = await response.json();
          setPosts(theUsers);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [posts]);


  return (

    posts.map(post => (
      <div className="card">
        <div className="card-body">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button onClick={<Comments />}> Show Comments</button>
        </div>
      </div>
    ))
  );
}
