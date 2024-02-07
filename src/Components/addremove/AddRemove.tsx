// // import React, { useState } from 'react';

// // function BlogPage() {
// //   const [blogs, setBlogs] = useState([]);

// //   const addBlog = () => {
// //     const newBlog = {
// //       id: blogs.length + 1, // generate unique ID for the blog
// //       title: `Blog ${blogs.length + 1}`,
// //       content: `This is the content of Blog ${blogs.length + 1}.`,
// //     };
// //     setBlogs([...blogs, newBlog]);
// //   };

// //   const removeBlog = (id) => {
// //     const updatedBlogs = blogs.filter((blog) => blog.id !== id);
// //     setBlogs(updatedBlogs);
// //   };

// //   return (
// //     <div>
// //       <h1>Blog Page</h1>
// //       <button onClick={addBlog}>Add Blog</button>
// //       <div>
// //         {blogs.map((blog) => (
// //           <div key={blog.id}>
// //             <h2>{blog.title}</h2>
// //             <p>{blog.content}</p>
// //             <button onClick={() => removeBlog(blog.id)}>Remove Blog</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default BlogPage;

// import React from "react";
// import Post from "../post/Post";
// import "./posts.css";

// const Posts: React.FC = () => {
//   const postData = [
//     {
//       img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//       title: "Title 1",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?",
//     },
//     {
//       img: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       title: "Title 2",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?",
//     },
//     // Add more post data objects as needed
//   ];

//   return (
//     <div className="posts">
//       {postData.map((post, index) => (
//         <Post
//           key={index}
//           img={post.img}
//           title={post.title}
//           content={post.content}
//         />
//       ))}
//     </div>
//   );
// };

// export default Posts;
