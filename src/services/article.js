import homePageData from "../data/homePage.json";
import articleData from "../data/article.json";

export function fetchHomePageData() {
  try {
    const response = homePageData;
    if (!response.status) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return homePageData?.data;
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
