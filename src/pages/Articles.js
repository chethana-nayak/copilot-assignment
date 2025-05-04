import React from "react";
import { useEffect, useState } from "react";

import ArticleCard from "../components/ArticleCard";
import { fetchHomePageData } from "../services/article";
import ArticleList from "../components/ArticleList";
import ArticleFilters from "../components/ArticleFilters";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState();

  useEffect(() => {
    const fetchArticles = () => {
      setLoading(true);
      let data = fetchHomePageData();
      setArticles(data?.articles || []);
      setLoading(false);
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchFilteredArticles = () => {
      setLoading(true);
      let data = fetchHomePageData(selectedFilters);
      setArticles(data?.articles || []);
      setLoading(false);
    };
    fetchFilteredArticles();
  }, [selectedFilters]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ArticleFilters
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <ArticleList>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            image={article?.heroImage}
            title={article?.title}
            subtitle={article?.subtitle}
            path={`/article/${article?.id}`}
          />
        ))}
      </ArticleList>
    </div>
  );
};

export default Articles;
