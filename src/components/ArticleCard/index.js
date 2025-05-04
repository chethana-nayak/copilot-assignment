import React from "react";
import { Link } from "react-router-dom";

import "./ArticleCard.css";

const ArticleCard = ({ image, title, subtitle, path }) => {
  return (
    <Link to={path} className="article-card">
      <img src={image} alt={title} className="article-card__image" />
      <div className="article-card__content">
        <h2 className="article-card__title">{title}</h2>
        <p className="article-card__subtitle">{subtitle}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
