import { useState, useEffect, createContext } from "react";
import Layout from './Layout';
import Header from './Header';
import PostMain from './PostMain';
import PostTitle from './PostTitle';
import BlogInfo from "./BlogInfo";

export const PostContext = createContext(
    {
        id: 'number',
        title: 'string',
        content: 'string',
        cover: 'string',
        likes: 'number',
    }
);

function Post() {
    const [post, setPost] = useState({
       id: 'number',
        title: 'string',
        content: 'string',
        cover: 'string',
        likes: 'number',
  });
       
    useEffect(() => {
    fetchData(); 
  }, []);
  
const fetchData = async () => {
    const response = await fetch('https://my-json-server.typicode.com/NataMimoza/db/posts/1');
    const data = await response.json();
    setPost(data);
  };

    return (
        <PostContext.Provider value={post}>
            <Layout>
                <BlogInfo/>
                <Header />
                <PostTitle />
                <PostMain />
            </Layout>
        </PostContext.Provider>
    );    
}

export default Post;