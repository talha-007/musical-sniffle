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
import categoryService from "../../../redux/api/categoryServices";
import { toast } from "react-toastify";
import { IMAGE_BASEURL } from "../../../redux/api/http-common";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await categoryService.getAllCategories();
      setCategories(response?.data?.data);
    } catch (err) {
      setError("Failed to fetch categories");
      toast.error("Failed to fetch categories");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleOpenDialog = (category = null) => {
    if (category) {
      setSelectedCategory(category);
      setFormData({
        name: category.name,
        image: null,
      });
      setImagePreview(`${IMAGE_BASEURL}${category.image}`);
    } else {
      setSelectedCategory(null);
      setFormData({
        name: "",
        image: null,
      });
      setImagePreview(null);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCategory(null);
    setFormData({
      name: "",
      image: null,
    });
    setImagePreview(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      if (selectedCategory) {
        await categoryService.updateCategory(
          selectedCategory.id,
          formDataToSend
        );
        toast.success("Category updated successfully");
      } else {
        await categoryService.createCategory(formDataToSend);
        toast.success("Category created successfully");
      }

      handleCloseDialog();
      fetchCategories();
    } catch (err) {
      setError("Failed to save category");
      toast.error("Failed to save category");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await categoryService.deleteCategory(id);
      toast.success("Category deleted successfully");
      fetchCategories();
    } catch (err) {
      setError("Failed to delete category");
      toast.error("Failed to delete category");
      console.error(err);
    } finally {
      setLoading(false);
      setOpenDeleteDialog(false);
      setCategoryToDelete(null);
    }
  };

  const handleDeleteClick = (category) => {
    setCategoryToDelete(category);
    setOpenDeleteDialog(true);
  };

  const filteredCategories = Array.isArray(categories)
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const paginatedCategories = filteredCategories.slice(
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
        <h2>Categories</h2>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Category
        </Button>
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search categories..."
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
      ) : categories?.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No categories found. Click "Add Category" to create one.
        </Alert>
      ) : filteredCategories.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No categories found matching your search criteria.
        </Alert>
      ) : (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Category Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedCategories.map((category, index) => (
                  <TableRow key={category._id}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>
                      <img
                        src={`${IMAGE_BASEURL}${category.image}`}
                        alt={category.name}
                        style={{ width: 150, height: 150, objectFit: "cover" }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenDialog(category)}
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteClick(category)}
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
            count={filteredCategories.length}
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
          {selectedCategory ? "Edit Category" : "Add New Category"}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Category Name"
              fullWidth
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
            <Box sx={{ mt: 2 }}>
              <input
                accept="image/*"
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <Button variant="outlined" component="span">
                  {selectedCategory ? "Change Image" : "Upload Image"}
                </Button>
              </label>
              {imagePreview && (
                <Box sx={{ mt: 2 }}>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ maxWidth: "100%", maxHeight: 200 }}
                  />
                </Box>
              )}
            </Box>
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
          setCategoryToDelete(null);
        }}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the category "{categoryToDelete?.name}
          "?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDeleteDialog(false);
              setCategoryToDelete(null);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(categoryToDelete?.id)}
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

export default Categories;
