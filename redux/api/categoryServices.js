import { callAPi } from "./http-common";

const getAllCategories = () => {
  return callAPi.get("/api/v1/categories");
};

const createCategory = (data) => {
  return callAPi.post("/api/v1/categories", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const updateCategory = (id, data) => {
  return callAPi.post(`/api/v1/categories/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const deleteCategory = (id) => {
  return callAPi.delete(`/api/v1/categories/${id}`);
};

const getCategoryById = (id) => {
  return callAPi.get(`/api/v1/categories/${id}`);
};

const categoryService = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
};

export default categoryService;
