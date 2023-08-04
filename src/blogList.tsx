import React from 'react'
import { Link } from 'react-router-dom';
import jediSword from './img/jedii.gif'
import sithSword from './img/sithh.gif'

interface Blog {
    title: string;
    body: string;
    family: string;
    author: string;
    id: number;
}

interface BlogListProps {
    blogs: Blog[];
    title: string;
}

const BlogList: React.FC<BlogListProps> = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className='blog-prev' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                        {blog.family === "Sith" && (
                            <img src={sithSword} alt="Sith Sword" />
                        )}
                        {blog.family === "Jedi" && (
                            <img src={jediSword} alt="Jedi Sword" />
                        )}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
