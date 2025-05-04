import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleDetailById } from "../services/article";
import ArticleDetailPage from "../components/ArticleDetailsLayout";
import Loader from "../components/Loader";
import BackButton from "../components/BackButton";

const ArticleDetails = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticleDetail = async () => {
      try {
        setLoading(true);
        const response = await fetchArticleDetailById(id);
        setArticle(response);
      } catch (error) {
        console.error("Error fetching article details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleDetail();
  }, [id]);

  return (
    <div>
      <div className="back-button-wrapper">
        <BackButton />
      </div>
      {loading ? (
        <Loader />
      ) : article ? (
        <ArticleDetailPage article={article} />
      ) : (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          No article found
        </h1>
      )}
    </div>
  );
};

export default ArticleDetails;
