import homePageData from "../data/homePage.json";
import articleData from "../data/article.json";
import categoriesData from "../data/categories.json";

export function fetchHomePageData(filters) {
  try {
    const response = JSON.parse(JSON.stringify(homePageData));

    if (!response.status) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (filters) {
      const { author, category, type, tag } = filters;
      response.data.articles = response.data.articles.filter((article) => {
        const matchesAuthor = author ? article.authorId === author.id : true;
        const matchesCategory = category
          ? article.categoryId === category.id
          : true;
        const matchesType = type ? article.type === type.id : true;
        const matchesTag = tag ? article.tags.includes(tag.name) : true;
        return matchesAuthor && matchesCategory && matchesType && matchesTag;
      });
    }
    return response?.data;
  } catch (error) {
    console.error("Error fetching homePage.json:", error);
    throw error;
  }
}

export function fetchArticleDetailById(id) {
  try {
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

export function fetchFilters() {
  try {
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
