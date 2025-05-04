import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleDetailById } from "../services/article";
import ArticleDetailPage from "../components/ArticleDetailsLayout";

const ArticleDetails = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticleDetail = async () => {
      try {
        setLoading(true);
        const response = fetchArticleDetailById(id);
        setArticle(response);
      } catch (error) {
        console.error("Error fetching article details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{article && <ArticleDetailPage article={article} />}</div>;
};

export default ArticleDetails;
