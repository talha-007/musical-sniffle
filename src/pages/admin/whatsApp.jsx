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
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { toast } from "react-toastify";
import whatsappService from "../../../redux/api/whatsAppService";

const WhatsAppNumber = () => {
  const [whatsappNumbers, setWhatsAppNumbers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [numberToDelete, setNumberToDelete] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    description: "",
  });
  const [numberError, setNumberError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchWhatsAppNumbers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await whatsappService.getAll();
      console.log(response);

      // Handle the nested data structure
      const numbersData = response?.data?.data ? [response.data.data] : [];
      setWhatsAppNumbers(numbersData);
    } catch (err) {
      setError("Failed to fetch WhatsApp numbers");
      toast.error("Failed to fetch WhatsApp numbers");
      console.error("Error fetching numbers:", err);
      setWhatsAppNumbers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWhatsAppNumbers();
  }, []);

  const handleOpenDialog = (number = null) => {
    if (number) {
      setSelectedNumber(number);
      setFormData({
        name: number.name,
        number: number.phone_number,
        description: number.description,
      });
    } else {
      setSelectedNumber(null);
      setFormData({
        name: "",
        number: "",
        description: "",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedNumber(null);
    setFormData({
      name: "",
      number: "",
      description: "",
    });
    setNumberError("");
  };

  const validatePhoneNumber = (number) => {
    // Remove any spaces, dashes, or parentheses
    const cleanedNumber = number.replace(/[\s\-()]/g, "");

    // Check if number starts with + and contains only digits after that
    if (!cleanedNumber.startsWith("+")) {
      return "Phone number must start with '+'";
    }

    // Check if the number after + contains only digits
    const numberWithoutPlus = cleanedNumber.substring(1);
    if (!/^\d+$/.test(numberWithoutPlus)) {
      return "Phone number must contain only digits after '+'";
    }

    // Check if the number length is between 8 and 15 digits (excluding the +)
    if (numberWithoutPlus.length < 8 || numberWithoutPlus.length > 15) {
      return "Phone number must be between 8 and 15 digits";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    const numberValidationError = validatePhoneNumber(formData.number);
    if (numberValidationError) {
      setNumberError(numberValidationError);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const dataToSend = {
        name: formData.name,
        number: formData.number,
        description: formData.description,
      };

      if (selectedNumber) {
        await whatsappService.updateWhatsAppNumber(
          selectedNumber.id,
          dataToSend
        );
        toast.success("WhatsApp number updated successfully");
      } else {
        await whatsappService.addNumber(dataToSend);
        toast.success("WhatsApp number created successfully");
      }

      handleCloseDialog();
      fetchWhatsAppNumbers();
    } catch (err) {
      setError("Failed to save WhatsApp number");
      toast.error("Failed to save WhatsApp number");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await whatsappService.deleteNumber(id);
      toast.success("WhatsApp number deleted successfully");
      fetchWhatsAppNumbers();
    } catch (err) {
      setError("Failed to delete WhatsApp number");
      toast.error("Failed to delete WhatsApp number");
      console.error(err);
    } finally {
      setLoading(false);
      setOpenDeleteDialog(false);
      setNumberToDelete(null);
    }
  };

  const handleDeleteClick = (number) => {
    setNumberToDelete(number);
    setOpenDeleteDialog(true);
  };

  const filteredNumbers = Array.isArray(whatsappNumbers)
    ? whatsappNumbers.filter(
        (number) =>
          number?.number?.includes(searchQuery) ||
          (number?.description &&
            number.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase()))
      )
    : [];

  const paginatedNumbers = filteredNumbers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  console.log("paginatedNumbers", filteredNumbers);

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
        <h2>WhatsApp Numbers</h2>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add WhatsApp Number
        </Button>
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search WhatsApp numbers..."
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
      ) : !whatsappNumbers || whatsappNumbers.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No WhatsApp numbers found. Click "Add WhatsApp Number" to create one.
        </Alert>
      ) : filteredNumbers.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No WhatsApp numbers found matching your search criteria.
        </Alert>
      ) : (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Phone Number</TableCell>

                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedNumbers.map((number, index) => (
                  <TableRow key={number.id}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>

                    <TableCell>{number.number}</TableCell>

                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenDialog(number)}
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteClick(number)}
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
            count={filteredNumbers.length}
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
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {selectedNumber ? "Edit WhatsApp Number" : "Add New WhatsApp Number"}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              fullWidth
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
            <TextField
              margin="dense"
              label="Phone Number"
              fullWidth
              value={formData.number}
              onChange={(e) => {
                const value = e.target.value;
                setFormData((prev) => ({
                  ...prev,
                  number: value,
                }));
                setNumberError(validatePhoneNumber(value));
              }}
              required
              placeholder="+1234567890"
              error={!!numberError}
              helperText={numberError}
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
          setNumberToDelete(null);
        }}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the WhatsApp number "
          {numberToDelete?.name}
          "?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDeleteDialog(false);
              setNumberToDelete(null);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(numberToDelete?.id)}
            color="error"
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default WhatsAppNumber;
