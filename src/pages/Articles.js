import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import PullToRefresh from "react-pull-to-refresh";

import ArticleCard from "../components/ArticleCard";
import ArticleList from "../components/ArticleList";
import ArticleFilters from "../components/ArticleFilters";
import Loader from "../components/Loader";

import { fetchHomePageData } from "../services/article";
import { CONSTANTS } from "../constants";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchParams] = useSearchParams();

  const fetchArticles = useCallback(async (filters = {}) => {
    setLoading(true);
    try {
      const data = await fetchHomePageData(filters);
      setArticles(data?.articles || []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setSelectedFilters(params);
    fetchArticles(params);
  }, [searchParams, fetchArticles]);

  const handleRefresh = async () => {
    const params = Object.fromEntries(searchParams.entries());
    await fetchArticles(params);
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div>
        <ArticleFilters selectedFilters={selectedFilters} />
        <ArticleList>
          {loading ? (
            <Loader />
          ) : articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard
                key={article.id}
                image={article.heroImage}
                title={article.title}
                subtitle={article.subtitle}
                path={`/article/${article.id}`}
              />
            ))
          ) : (
            <h1>{CONSTANTS.notFound.articles}</h1>
          )}
        </ArticleList>
      </div>
    </PullToRefresh>
  );
};

export default Articles;
