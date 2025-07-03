import { callAPi } from "./http-common";

const getAllFaqs = () => {
  return callAPi.get("/api/v1/faqs");
};

const createFaq = (data) => {
  return callAPi.post("/api/v1/faqs", data);
};

const updateFaq = (id, data) => {
  return callAPi.put(`/api/v1/faqs/${id}`, data);
};

const deleteFaq = (id) => {
  return callAPi.delete(`/api/v1/faqs/${id}`);
};

const getFaqById = (id) => {
  return callAPi.get(`/api/v1/faqs/${id}`);
};

const faqService = {
  getAllFaqs,
  createFaq,
  updateFaq,
  deleteFaq,
  getFaqById,
};

export default faqService;
