import homePageData from "../data/homePage.json";

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
