import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import loadingGif from './img/loadingJedi.gif'; 

const BlogDetails: React.FC = () => {
  const { id }: { id: string } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  if (isPending ) {
    return (
      <div className="blog-details">
        <h2>Loading...</h2>
        <img src={loadingGif} alt="saber loading gif" />
      </div>
    );
  }
  

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>No blogs data available</div>;
  }

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="blog-details">
      <article>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <div>{blog.body}</div>
        <p>Family: {blog.family}</p>
        <br />
        <br />
        <button onClick={handleClick}>delete</button>
      </article>
    </div>
  );
};

export default BlogDetails;
