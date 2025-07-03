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
import faqService from "../../../redux/api/faqServices";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [faqToDelete, setFaqToDelete] = useState(null);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchFaqs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await faqService.getAllFaqs();
      setFaqs(response?.data?.data);
    } catch (err) {
      setError("Failed to fetch FAQs");
      toast.error("Failed to fetch FAQs");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleOpenDialog = (faq = null) => {
    if (faq) {
      setSelectedFaq(faq);
      setFormData({
        question: faq.question,
        answer: faq.answer,
      });
    } else {
      setSelectedFaq(null);
      setFormData({
        question: "",
        answer: "",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedFaq(null);
    setFormData({
      question: "",
      answer: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      if (selectedFaq) {
        await faqService.updateFaq(selectedFaq.id, formData);
        toast.success("FAQ updated successfully");
      } else {
        await faqService.createFaq(formData);
        toast.success("FAQ created successfully");
      }

      handleCloseDialog();
      fetchFaqs();
    } catch (err) {
      setError("Failed to save FAQ");
      toast.error("Failed to save FAQ");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await faqService.deleteFaq(id);
      toast.success("FAQ deleted successfully");
      fetchFaqs();
    } catch (err) {
      setError("Failed to delete FAQ");
      toast.error("Failed to delete FAQ");
      console.error(err);
    } finally {
      setLoading(false);
      setOpenDeleteDialog(false);
      setFaqToDelete(null);
    }
  };

  const handleDeleteClick = (faq) => {
    setFaqToDelete(faq);
    setOpenDeleteDialog(true);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedFaqs = filteredFaqs.slice(
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
        <h2>FAQs</h2>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add FAQ
        </Button>
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search FAQs..."
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
      ) : faqs.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No FAQs found. Click "Add FAQ" to create one.
        </Alert>
      ) : filteredFaqs.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No FAQs found matching your search criteria.
        </Alert>
      ) : (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Question</TableCell>
                  <TableCell>Answer</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedFaqs.map((faq, index) => (
                  <TableRow key={faq._id}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{faq.question}</TableCell>
                    <TableCell
                      sx={{
                        maxWidth: "400px",
                        "& > div": {
                          maxHeight: "100px",
                          overflow: "auto",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                        },
                      }}
                    >
                      <div>{faq.answer}</div>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenDialog(faq)}
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteClick(faq)}
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
            count={filteredFaqs.length}
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
        <DialogTitle>{selectedFaq ? "Edit FAQ" : "Add New FAQ"}</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Question"
              fullWidth
              value={formData.question}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, question: e.target.value }))
              }
              required
            />
            <TextField
              margin="dense"
              label="Answer"
              fullWidth
              multiline
              rows={4}
              value={formData.answer}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, answer: e.target.value }))
              }
              required
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
          setFaqToDelete(null);
        }}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the FAQ "{faqToDelete?.question}"?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDeleteDialog(false);
              setFaqToDelete(null);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(faqToDelete?.id)}
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

export default FAQ;
