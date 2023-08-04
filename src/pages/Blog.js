import React, { useState } from 'react';
import './pagesStyle/Blog.css'
const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [visible, setVisible]=useState(false)
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create a new blog object with the input data
    const newBlog = {
      title: title,
      content: content,
      author: author,
    };
    // Add the new blog to the list of blogs
    setBlogs([...blogs, newBlog]);
    // Clear the form fields
    setTitle('');
    setContent('');
    setAuthor('');
  };
  const handleVerify=()=>[
    setVisible(true)
  ]

  return (
    <div className="container">
      <button onClick={handleVerify}>addBlog</button>
   {visible?(
      <form onSubmit={handleFormSubmit} className="form">
          <button onClick={()=>setVisible(false)}>X</button>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />

        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={handleContentChange} />

        <label htmlFor="author">Author:</label>
        <input type="text" id="author" value={author} onChange={handleAuthorChange} />

        <button type="submit">Add Blog</button>
      </form>
   ):null}
      <div className="blog-list">
        <h2>List of Blogs:</h2>
        {blogs.map((blog, index) => (
          <div key={index} className="blog-item">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>By: {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBlog;
