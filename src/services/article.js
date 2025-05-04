import homePageData from "../data/homePage.json";
import articleData from "../data/article.json";
import categoriesData from "../data/categories.json";
import { apiTimeout } from "./apiTimeout";

export async function fetchHomePageData(filters) {
  try {
    await apiTimeout();
    const response = JSON.parse(JSON.stringify(homePageData));
    if (!response.status) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (filters) {
      const { author, category, type, tag } = filters;
      response.data.articles = response.data.articles.filter((article) => {
        const matchesAuthor = author ? article.authorId === author : true;
        const matchesCategory = category
          ? article.categoryId === category
          : true;
        const matchesType = type ? article.type === type : true;
        const matchesTag = tag ? article.tags.includes(tag) : true;
        return matchesAuthor && matchesCategory && matchesType && matchesTag;
      });
    }
    return response?.data;
  } catch (error) {
    console.error("Error fetching homePage.json:", error);
    throw error;
  }
}

export async function fetchArticleDetailById(id) {
  try {
    await apiTimeout();
    const response = articleData;
    if (!response.status) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return articleData?.data;
  } catch (error) {
    console.error("Error fetching article.json:", error);
    throw error;
  }
}

export async function fetchFilters() {
  try {
    await apiTimeout();
    const response = categoriesData;
    if (!response.status) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return categoriesData?.data;
  } catch (error) {
    console.error("Error fetching categories.json:", error);
    throw error;
  }
}
