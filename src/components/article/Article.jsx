import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ url, title, author, description })  => {
    return (
        <>
            <a href={url} style={{ frontSize:"8.5rem"}}>
            {title}
            </a>
            {author && <p> Written By: {author} </p>}
            <p>Summary: {description}</p>
        </>
    )
    
};

Article.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string.isRequired,
  };
  export default Article;


