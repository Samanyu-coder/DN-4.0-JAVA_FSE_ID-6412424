import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <ul>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          <strong>{blog.author}</strong>
          <p>{blog.description}</p>
        </div>
      ))}
    </ul>
  );
}

export default BlogDetails;
