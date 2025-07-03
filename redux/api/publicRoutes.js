import { callAPi } from "./http-common";

const getAllCategories = () => {
  return callAPi.get("/api/v1/categories");
};

const getAllGalleryItems = (categoryId) => {
  return callAPi.get(`/api/v1/galleries/category/${categoryId}`);
};
const getAllFaqs = () => {
  return callAPi.get(`/api/v1/faqs`);
};
const getAllStats = () => {
  return callAPi.get("api/v1/stats");
};

const publicRoutes = {
  getAllStats,
  getAllCategories,
  getAllGalleryItems,
  getAllFaqs,
};

export default publicRoutes;
