import React from "react";
import { useEffect, useState } from "react";

import ArticleCard from "../components/ArticleCard";
import { fetchHomePageData } from "../services/article";
import ArticleList from "../components/ArticleList";
import ArticleFilters from "../components/ArticleFilters";
import { useSearchParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState();
  const [searchParams] = useSearchParams();

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
      const params = Object.fromEntries(searchParams.entries());
      setSelectedFilters(params);
      let data = fetchHomePageData(params);
      setArticles(data?.articles || []);
      setLoading(false);
    };
    fetchFilteredArticles();
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ArticleFilters selectedFilters={selectedFilters} />
      <ArticleList>
        {articles && articles?.length > 0 ? (
          articles.map((article, index) => (
            <ArticleCard
              key={index}
              image={article?.heroImage}
              title={article?.title}
              subtitle={article?.subtitle}
              path={`/article/${article?.id}`}
            />
          ))
        ) : (
          <h1>No articles found</h1>
        )}
      </ArticleList>
    </div>
  );
};

export default Articles;
