import React from "react";
import { useEffect, useState } from "react";
import PullToRefresh from "react-pull-to-refresh";

import ArticleCard from "../components/ArticleCard";
import { fetchHomePageData } from "../services/article";
import ArticleList from "../components/ArticleList";
import ArticleFilters from "../components/ArticleFilters";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState();
  const [searchParams] = useSearchParams();

  const fetchArticles = async (filters = {}) => {
    setLoading(true);
    const data = await fetchHomePageData(filters);
    setArticles(data?.articles || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setSelectedFilters(params);
    fetchArticles(params);
  }, [searchParams]);

  const handleRefresh = async () => {
    const params = Object.fromEntries(searchParams.entries());
    fetchArticles(params);
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div>
        <ArticleFilters selectedFilters={selectedFilters} />
        <ArticleList>
          {loading ? (
            <Loader />
          ) : articles && articles?.length > 0 ? (
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
    </PullToRefresh>
  );
};

export default Articles;
