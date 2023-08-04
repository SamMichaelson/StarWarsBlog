import React from 'react';
import BlogList from './blogList';
import useFetch from './useFetch';
import loadingGif from './img/loadingJedi.gif'; 

export const Home: React.FC = () => {
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    if (isPending ) {
        return (
          <div className="blog-details">
            <h2>Loading...</h2>
            <img src={loadingGif} alt="saber loading gif" />
          </div>
        );
      }
    return (
        <div className="home">
            {error && <h2>{error}</h2>}
            {blogs &&
                <BlogList blogs={blogs} title="All blogs" />
            }
        </div>
    );
};
