import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  CircularProgress,
  Alert,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  InputAdornment,
  TablePagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import appointmentService from "../../../redux/api/appointmentServices";
import { toast } from "react-toastify";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openStatusDialog, setOpenStatusDialog] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    unit_number: "",
    description: "",
    discount_code: "",
    is_business: false,
    opt_in: false,
    review: "",
    load_size_value: 0,
    load_size_label: "",
    load_size_price: 0,
    schedule_date: null,
    time_slot: "",
    service: "",
    status: "pending",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const loadSizeOptions = [
    { value: 0, label: "Min Load", price: 149 },
    { value: 1, label: "1/8 Load", price: 189 },
    { value: 2, label: "1/6 Load", price: 239 },
    { value: 3, label: "1/4 Load", price: 319 },
    { value: 4, label: "1/3 Load", price: 389 },
    { value: 5, label: "3/8 Load", price: 429 },
    { value: 6, label: "1/2 Load", price: 509 },
    { value: 7, label: "5/8 Load", price: 589 },
    { value: 8, label: "2/3 Load", price: 619 },
    { value: 9, label: "3/4 Load", price: 659 },
    {
      value: 10,
      label: "5/6 Load",
      price: 699,
      image: "/src/assets/load/11.jpg",
    },
    {
      value: 11,
      label: "7/8 Load",
      price: 729,
      image: "/src/assets/load/12.jpg",
    },
    {
      value: 12,
      label: "Full Load",
      price: 749,
      image: "/src/assets/load/13.jpg",
    },
  ];

  const serviceOptions = ["full", "partial"];
  const statusOptions = ["pending", "confirmed", "completed", "cancelled"];

  const timeSlots = [
    { value: "8:00am - 10:00am", label: "8:00am - 10:00am" },
    { value: "8:30am - 10:30am", label: "8:30am - 10:30am" },
    { value: "9:00am - 11:00am", label: "9:00am - 11:00am" },
    { value: "9:30am - 11:30am", label: "9:30am - 11:30am" },
    { value: "10:00am - 12:00pm", label: "10:00am - 12:00pm" },
    { value: "10:30am - 12:30pm", label: "10:30am - 12:30pm" },
    { value: "11:00am - 1:00pm", label: "11:00am - 1:00pm" },
    { value: "11:30am - 1:30pm", label: "11:30am - 1:30pm" },
    { value: "12:00pm - 2:00pm", label: "12:00pm - 2:00pm" },
    { value: "12:30pm - 2:30pm", label: "12:30pm - 2:30pm" },
    { value: "1:00pm - 3:00pm", label: "1:00pm - 3:00pm" },
    { value: "1:30pm - 3:30pm", label: "1:30pm - 3:30pm" },
    { value: "2:00pm - 4:00pm", label: "2:00pm - 4:00pm" },
    { value: "2:30pm - 4:30pm", label: "2:30pm - 4:30pm" },
    { value: "3:00pm - 5:00pm", label: "3:00pm - 5:00pm" },
    { value: "3:30pm - 5:30pm", label: "3:30pm - 5:30pm" },
    { value: "4:00pm - 6:00pm", label: "4:00pm - 6:00pm" },
    { value: "4:30pm - 6:30pm", label: "4:30pm - 6:30pm" },
  ];

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await appointmentService.getAllAppointments();

      setAppointments(
        Array.isArray(response?.data?.data?.data)
          ? response?.data?.data?.data
          : []
      );
    } catch (err) {
      setError("Failed to fetch appointments");
      toast.error("Failed to fetch appointments");
      console.error(err);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleOpenDialog = (appointment = null) => {
    if (appointment) {
      setSelectedAppointment(appointment);
      setFormData({
        first_name: appointment.first_name || "",
        last_name: appointment.last_name || "",
        email: appointment.email || "",
        phone: appointment.phone || "",
        address: appointment.address || "",
        unit_number: appointment.unit_number || "",
        description: appointment.description || "",
        discount_code: appointment.discount_code || "",
        is_business: appointment.is_business || false,
        opt_in: appointment.opt_in || false,
        review: appointment.review || "",
        load_size_value: appointment.load_size_value || 0,
        load_size_label: appointment.load_size_label || "",
        load_size_price: appointment.load_size_price || 0,
        schedule_date: appointment.schedule_date || null,
        time_slot: appointment.time_slot || "",
        service: appointment.service || "",
        status: appointment.status || "pending",
      });
    } else {
      setSelectedAppointment(null);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        unit_number: "",
        description: "",
        discount_code: "",
        is_business: false,
        opt_in: false,
        review: "",
        load_size_value: 0,
        load_size_label: "",
        load_size_price: 0,
        schedule_date: null,
        time_slot: "",
        service: "",
        status: "pending",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedAppointment(null);
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      unit_number: "",
      description: "",
      discount_code: "",
      is_business: false,
      opt_in: false,
      review: "",
      load_size_value: 0,
      load_size_label: "",
      load_size_price: 0,
      schedule_date: null,
      time_slot: "",
      service: "",
      status: "pending",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      // Get the selected load size option
      const selectedLoadSize = loadSizeOptions.find(
        (option) => option.value === formData.load_size_value
      );

      // Create the appointment data with load size values
      const appointmentData = {
        ...formData,
        load_size_value: selectedLoadSize?.value || 0,
        load_size_label: selectedLoadSize?.label || "",
        load_size_price: selectedLoadSize?.price || 0,
      };

      if (selectedAppointment) {
        await appointmentService.updateAppointment(
          selectedAppointment.id,
          appointmentData
        );
        toast.success("Appointment updated successfully");
      } else {
        await appointmentService.createAppointment(appointmentData);
        toast.success("Appointment created successfully");
      }

      handleCloseDialog();
      fetchAppointments();
    } catch (err) {
      setError("Failed to save appointment");
      toast.error("Failed to save appointment");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await appointmentService.deleteAppointment(id);
      toast.success("Appointment deleted successfully");
      fetchAppointments();
    } catch (err) {
      setError("Failed to delete appointment");
      toast.error("Failed to delete appointment");
      console.error(err);
    } finally {
      setLoading(false);
      setOpenDeleteDialog(false);
      setAppointmentToDelete(null);
    }
  };

  const handleDeleteClick = (appointment) => {
    setAppointmentToDelete(appointment);
    setOpenDeleteDialog(true);
  };

  const handleStatusUpdate = async () => {
    try {
      setLoading(true);
      setError(null);
      await appointmentService.updateAppointment(selectedAppointment.id, {
        ...selectedAppointment,
        status: selectedStatus,
      });
      toast.success("Status updated successfully");
      fetchAppointments();
      setOpenStatusDialog(false);
      setSelectedAppointment(null);
      setSelectedStatus("");
    } catch (err) {
      setError("Failed to update status");
      toast.error("Failed to update status");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusClick = (appointment) => {
    setSelectedAppointment(appointment);
    setSelectedStatus(appointment.status);
    setOpenStatusDialog(true);
  };

  const filteredAppointments = Array.isArray(appointments)
    ? appointments.filter(
        (appointment) =>
          appointment?.first_name
            ?.toLowerCase()
            ?.includes(searchQuery.toLowerCase()) ||
          appointment?.email
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          appointment?.phone?.includes(searchQuery) ||
          appointment?.address
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase())
      )
    : [];

  const paginatedAppointments = filteredAppointments.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <h2>Appointments</h2>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Appointment
        </Button>
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search appointments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : appointments.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No appointments found. Click "Add Appointment" to create one.
        </Alert>
      ) : filteredAppointments.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No appointments found matching your search criteria.
        </Alert>
      ) : (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Service Date</TableCell>
                  <TableCell>Time Slot</TableCell>
                  <TableCell>Service Type</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedAppointments?.map((appointment) => (
                  <TableRow key={appointment._id}>
                    <TableCell>
                      {appointment?.first_name} {appointment.last_name}
                    </TableCell>
                    <TableCell>{appointment.email}</TableCell>
                    <TableCell>{appointment.phone}</TableCell>
                    <TableCell>
                      {new Date(appointment.schedule_date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{appointment.time_slot}</TableCell>
                    <TableCell>{appointment.service}</TableCell>
                    <TableCell>
                      <span
                        onClick={() => handleStatusClick(appointment)}
                        style={{
                          padding: "4px 8px",
                          borderRadius: "4px",
                          backgroundColor:
                            appointment.status === "completed"
                              ? "#4caf50"
                              : appointment.status === "cancelled"
                              ? "#f44336"
                              : appointment.status === "confirmed"
                              ? "#2196f3"
                              : "#ff9800",
                          color: "white",
                          textTransform: "capitalize",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {appointment.status}
                        <EditIcon />
                      </span>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenDialog(appointment)}
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteClick(appointment)}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredAppointments.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {selectedAppointment ? "Edit Appointment" : "Add New Appointment"}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="First Name"
              fullWidth
              value={formData.first_name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  first_name: e.target.value,
                }))
              }
              required
            />
            <TextField
              margin="dense"
              label="Last Name"
              fullWidth
              value={formData.last_name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  last_name: e.target.value,
                }))
              }
              required
            />
            <TextField
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            <TextField
              margin="dense"
              label="Phone"
              fullWidth
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              required
            />
            <TextField
              margin="dense"
              label="Address"
              fullWidth
              value={formData.address}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, address: e.target.value }))
              }
              required
            />
            <TextField
              margin="dense"
              label="Unit Number"
              fullWidth
              value={formData.unit_number}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  unit_number: e.target.value,
                }))
              }
            />
            <TextField
              margin="dense"
              label="Description"
              fullWidth
              multiline
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
            <TextField
              margin="dense"
              label="Discount Code"
              fullWidth
              value={formData.discount_code}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  discount_code: e.target.value,
                }))
              }
            />
            <FormControl fullWidth margin="dense">
              <InputLabel>Load Size</InputLabel>
              <Select
                value={formData.load_size_value}
                label="Load Size"
                onChange={(e) => {
                  const selectedLoadSize = loadSizeOptions.find(
                    (option) => option.value === e.target.value
                  );
                  setFormData((prev) => ({
                    ...prev,
                    load_size_value: selectedLoadSize?.value || 0,
                    load_size_label: selectedLoadSize?.label || "",
                    load_size_price: selectedLoadSize?.price || 0,
                  }));
                }}
                required
              >
                {loadSizeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label} - ${option.price}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <InputLabel>Service Type</InputLabel>
              <Select
                value={formData.service}
                label="Service Type"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    service: e.target.value,
                  }))
                }
                required
              >
                {serviceOptions.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Service Date"
                value={formData.schedule_date}
                onChange={(newValue) =>
                  setFormData((prev) => ({
                    ...prev,
                    schedule_date: newValue,
                  }))
                }
                renderInput={(params) => (
                  <TextField {...params} fullWidth margin="dense" required />
                )}
                minDate={new Date()}
              />
            </LocalizationProvider>
            <FormControl fullWidth margin="dense">
              <InputLabel>Time Slot</InputLabel>
              <Select
                value={formData.time_slot}
                label="Time Slot"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    time_slot: e.target.value,
                  }))
                }
                required
              >
                {timeSlots.map((slot) => (
                  <MenuItem key={slot.value} value={slot.value}>
                    {slot.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <InputLabel>Business Account</InputLabel>
              <Select
                value={formData.is_business}
                label="Business Account"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    is_business: e.target.value,
                  }))
                }
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <InputLabel>Opt In</InputLabel>
              <Select
                value={formData.opt_in}
                label="Opt In"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    opt_in: e.target.value,
                  }))
                }
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <InputLabel>Status</InputLabel>
              <Select
                value={formData.status}
                label="Status"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    status: e.target.value,
                  }))
                }
                required
              >
                {statusOptions.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              label="Review"
              fullWidth
              multiline
              rows={3}
              value={formData.review}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, review: e.target.value }))
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Save"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog
        open={openDeleteDialog}
        onClose={() => {
          setOpenDeleteDialog(false);
          setAppointmentToDelete(null);
        }}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the appointment for{" "}
          {appointmentToDelete?.first_name} {appointmentToDelete?.last_name}?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDeleteDialog(false);
              setAppointmentToDelete(null);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(appointmentToDelete?.id)}
            color="error"
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openStatusDialog}
        onClose={() => {
          setOpenStatusDialog(false);
          setSelectedAppointment(null);
          setSelectedStatus("");
        }}
      >
        <DialogTitle>Update Status</DialogTitle>
        <DialogContent sx={{ width: "300px" }}>
          <Box sx={{ mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={selectedStatus}
                label="Status"
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statusOptions.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenStatusDialog(false);
              setSelectedAppointment(null);
              setSelectedStatus("");
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleStatusUpdate}
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Update Status"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Appointment;
