import { useState, useEffect } from "react";

function Post() {
    const [post, setPost] = useState({
       id: 'number',
        title: 'string',
        content: 'string',
        cover: 'string',
        likes: 'number',
  });
    const [likes, setLikes] = useState(0);
  
const fetchData = async () => {
    const response = await fetch('https://my-json-server.typicode.com/NataMimoza/db/posts/1');
    const data = await response.json();
    setPost(data);
  };

 useEffect(() => {
    fetchData(); 
  }, []);

  const like = () => {
    setLikes(likes + 1); 
  };    

    return (
        <article className='post'>
            <div className='cover-container'>
                <img src={post.cover} alt={post.title} />
            </div>
            <div className='post-footer'>
                <h3>{post.title} {post.id}</h3>
                <p>{post.content}</p>
                <button id='like' onClick={like}>
                    Like this post <strong>{likes}</strong>
                </button>
            </div>
        </article>
    );
}
export default Post;