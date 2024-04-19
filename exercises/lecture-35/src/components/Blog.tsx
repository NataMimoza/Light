// src/components/Blog.tsx

//import React from "react";

//class Blog extends Component {

//     constructor(props:any) {
//         super(props);
//         this.state = { post: props.post };
//     }

//     render() {
//        return(
//         <article className='post'>
//             <div className='cover-container'>
//               <img src={this.props.post.cover} alt={this.props.post.title} />
//             </div>
//             <div className='post-footer'>
//               <h3>{this.props.post.title} {this.props.post.id}</h3>
//               <p>{this.props.post.content}</p>
//             </div>
//         </article>
//         );
//     }
// }

// Переписати клас компонента Blog як функціональний компонент.

function Blog(props: {
  post: {
    id: number; title: string;
    content: string; cover: string; likes: number;
  }
}) {
  return (
    <article className='post'>
      <div className='cover-container'>
               <img src={props.post.cover} alt={props.post.title} />
             </div>
             <div className='post-footer'>
               <h3>{props.post.title} {props.post.id}</h3>
               <p>{props.post.content}</p>
             </div>
    </article>
  );
}
export default Blog;
