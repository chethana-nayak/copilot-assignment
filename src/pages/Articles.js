import React from "react";
import { useEffect, useState } from "react";

import ArticleCard from "../components/ArticleCard";
import { fetchHomePageData } from "../services/article";
import ArticleList from "../components/ArticleList";
import ArticleFilters from "../components/ArticleFilters";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = () => {
      let data = fetchHomePageData();
      setArticles(data?.articles || []);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <ArticleFilters />
      <ArticleList>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            image={article?.hero}
            title={article?.title}
            path={`/article/${article?.articleId}`}
          />
        ))}
      </ArticleList>
    </div>
  );
};

export default Articles;
