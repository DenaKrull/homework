import { useEffect, useState } from "react"
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:80/posts", {
        credentials: 'include'
      });
      const posts = await response.json();
      setPosts(posts);
    })();
  }, []);

  return (
    <div>
      {posts.map(p => (<Post post={p} />))}
    </div>
  )
}