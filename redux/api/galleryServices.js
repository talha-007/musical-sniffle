import { callAPi, callAPiMultiPart } from "./http-common";

const getAllGalleryItems = () => {
  return callAPi.get("/api/v1/galleries ");
};

const createGalleryItem = (data) => {
  return callAPi.post("/api/v1/galleries ", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const updateGalleryItem = (id, data) => {
  return callAPi.post(`/api/v1/galleries/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const deleteGalleryItem = (id) => {
  return callAPi.delete(`/api/v1/galleries/${id}`);
};

const getGalleryItemById = (id) => {
  return callAPi.get(`/api/v1/galleries/${id}`);
};

const galleryService = {
  getAllGalleryItems,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  getGalleryItemById,
};

export default galleryService;
