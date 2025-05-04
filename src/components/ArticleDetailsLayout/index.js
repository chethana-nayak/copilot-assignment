import React from "react";
import "./ArticleDetailsLayout.css";
import AuthorPopup from "../AuthorPopup";
import BackButton from "../BackButton";
import { Link } from "react-router-dom";

const ArticleDetailsLayout = ({ article }) => {
  if (!article) {
    return <div>No article data available.</div>;
  }

  const {
    title,
    heroImage,
    author,
    subtitle,
    type,
    tags,
    description,
    content,
  } = article;

  return (
    <>
      <div className="back-button-wrapper">
        <BackButton />
      </div>
      <div className="article-detail-page">
        {title && <h1 className="title">{title}</h1>}
        {heroImage && <img src={heroImage} alt="Hero" className="hero-image" />}
        {author && <AuthorPopup {...author} />}
        {subtitle && <div className="subtitles">{subtitle}</div>}
        {type === "video" && content ? (
          <video controls className="media-player">
            <source src={content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          description && (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          )
        )}
        {tags && tags.length > 0 && (
          <div className="tags">
            {tags.map((tag, index) => (
              <Link
                key={index}
                to={`/?tag=${encodeURIComponent(tag)}`}
                className="tag"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ArticleDetailsLayout;
