import { useContext, useState } from "react";
import { PostContext } from "./Post";

function PostMain() {
    const post: any = useContext(PostContext);
    const [likes, setLikes] = useState(0);

    const like = () => {
        setLikes(likes + 1);
    };

    return (
         <article className="post">
      <div className="cover-container">
        <img src={post.cover} alt={post.title} />
      </div>
      <div className="post-footer">
        <h3>{post.title} {post.id}</h3>
        <p>{post.content}</p>
        <button id="like" onClick={like}>
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
}

export default PostMain;