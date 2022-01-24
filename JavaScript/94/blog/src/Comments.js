import React, { useEffect, useState } from 'react';

export default function Comments() {

  const [comments, setComments] = useState([]);

  useEffect(() => {

    (async (postId) => {
      try {
        if (!comments.length) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`);
          if (!response.ok) {
            throw new Error(` ${response.statusText}`);
          }
          const theComments = await response.json();
          setComments(theComments);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [comments]);



  return (

    comments.map(comment => (
      <div className="card">
        <div className="card-body">
          <h4>{comment.body}</h4>
          <p>{comment.email}</p>
        </div>
      </div>
    ))
  );
}
