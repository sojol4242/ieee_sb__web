import React, { useEffect, useState } from 'react';
import Article from './Article';
import blogData from './fakeData';
import './newsevents.css';
const NewsEvents = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    setArticle(blogData);
  });
  console.log(blogData);
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <div className="flex flex-row justify-center items-center">
          <div className="gradient__bar w-1/5"></div>
          <h1 className="gradient__text capitalize px-6">News and Events</h1>
          <div className="gradient__bar w-1/5"></div>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-container_groupA">
          {article.slice(0, 1).map((items) => (
            <Article key={items.id} items={items} />
          ))}
        </div>
        <div className="blog-container_groupB">
          {article.slice(1, article.length).map((items) => (
            <Article key={items.id} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
