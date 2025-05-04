import React from "react";
import "./ArticleDetailsLayout.css";
import AuthorPopup from "../AuthorPopup";
import BackButton from "../BackButton";

const ArticleDetailsLayout = ({ article }) => {
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
        <h1 className="title">{title}</h1>
        <img src={heroImage} alt="Hero" className="hero-image" />
        <AuthorPopup {...author} />
        {subtitle && <div className="subtitles">{subtitle}</div>}
        {type === "video" ? (
          <video controls className="media-player">
            <source src={content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            {description && (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </>
        )}
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleDetailsLayout;
