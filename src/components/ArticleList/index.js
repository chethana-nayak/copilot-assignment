import React from "react";

import "./ArticleList.css";

const ArticleList = ({ children }) => {
  return <div className="article-list-wrapper">{children}</div>;
};

export default ArticleList;
