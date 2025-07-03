import { callAPi } from "./http-common";

const getAllAppointments = () => {
  return callAPi.get("/api/v1/appointments");
};

const createAppointment = (data) => {
  return callAPi.post("/api/v1/appointments", data);
};

const updateAppointment = (id, data) => {
  return callAPi.put(`/api/v1/appointments/${id}`, data);
};
const updateAppointmentStatus = (id, data) => {
  return callAPi.patch(`/api/v1/appointments/${id}/status`, data);
};
const deleteAppointment = (id) => {
  return callAPi.delete(`/api/v1/appointments/${id}`);
};

const getAppointmentById = (id) => {
  return callAPi.get(`/api/v1/appointments/${id}`);
};

const appointmentService = {
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointmentById,
  updateAppointmentStatus,
};

export default appointmentService;
