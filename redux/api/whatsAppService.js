import { callAPi } from "./http-common";

const getAll = () => {
  return callAPi.get("/api/v1/whatsapp-number");
};

const addNumber = (data) => {
  return callAPi.post("/api/v1/whatsapp-number", data);
};

const update = (id, data) => {
  return callAPi.put(`/api/v1/whatsapp-number/${id}`, data);
};

const deleteNumber = (id) => {
  return callAPi.delete(`/api/v1/whatsapp-number/${id}`);
};

const getNumberById = (id) => {
  return callAPi.get(`/api/v1/faqs/${id}`);
};

const whatsappService = {
  addNumber,
  getAll,
  update,
  deleteNumber,
  getNumberById,
};

export default whatsappService;
