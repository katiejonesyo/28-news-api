import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ url, title, author, description })  => {
    return (
        <>
            <a href={url} style={{ 
            frontSize:'8.5rem', 
            color: 'white',
            background: 'black',
            }}>
            {title}
            </a>
            {author && <p> Author: {author} </p>}
            <p>Description: {description}</p>
        </>
    ) 
};

Article.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string,
  };
  export default Article;


