import { PostContext } from './Posts';
import { useContext } from 'react';

function PostTitle() {
    const post = useContext(PostContext);
    return <>{post.title}</>
}

export default PostTitle;