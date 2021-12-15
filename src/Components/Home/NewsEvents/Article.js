import React from 'react';
import './newsevents.css'
const Article = (items) => {
 
  const { heading , imgURL, text } = items.items;
  console.log(items);

  return (
    <article className="blog-container_article shadow-lg">
      
        <img src={imgURL} alt="blog_image" className="blog-container_image" />
     
      <div className="blog-container_article-content">
        <div>
          <h3>{heading}</h3>
          <p>{text}</p>
         
        </div>
        <button className="read__more__button">Read Full Article</button>
      </div>
      
    </article>
  );
};

export default Article;
