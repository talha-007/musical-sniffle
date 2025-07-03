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
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import galleryService from "../../../redux/api/galleryServices";
import categoryService from "../../../redux/api/categoryServices";
import { toast } from "react-toastify";
import { IMAGE_BASEURL } from "../../../redux/api/http-common";

const AdminGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    serviceName: "",
    details: "",
    categoryId: "",
    beforeImages: [],
    afterImages: [],
  });
  const [beforeImagePreviews, setBeforeImagePreviews] = useState([]);
  const [afterImagePreviews, setAfterImagePreviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchGalleryItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await galleryService.getAllGalleryItems();
      setGalleryItems(response?.data?.data);
    } catch (err) {
      setError("Failed to fetch gallery items");
      toast.error("Failed to fetch gallery items");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await categoryService.getAllCategories();
      setCategories(response?.data?.data || []);
    } catch (err) {
      console.error("Error fetching categories:", err);
      toast.error("Failed to fetch categories");
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchGalleryItems();
    fetchCategories();
  }, []);

  const handleOpenDialog = (item = null) => {
    if (item) {
      setSelectedItem(item);
      setFormData({
        title: item.title,
        description: item.description,
        serviceName: item.service_name || "",
        details: item.details || "",
        categoryId: item.category_id || "",
        beforeImages: [],
        afterImages: [],
      });
      setBeforeImagePreviews(
        item.before_images.map((img) => `${IMAGE_BASEURL}${img}`)
      );
      setAfterImagePreviews(
        item.after_images.map((img) => `${IMAGE_BASEURL}${img}`)
      );
    } else {
      setSelectedItem(null);
      setFormData({
        title: "",
        description: "",
        serviceName: "",
        details: "",
        categoryId: "",
        beforeImages: [],
        afterImages: [],
      });
      setBeforeImagePreviews([]);
      setAfterImagePreviews([]);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
    setFormData({
      title: "",
      description: "",
      serviceName: "",
      details: "",
      categoryId: "",
      beforeImages: [],
      afterImages: [],
    });
    setBeforeImagePreviews([]);
    setAfterImagePreviews([]);
  };

  const handleImageChange = (event, type) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      if (type === "before") {
        setBeforeImagePreviews([...beforeImagePreviews, ...newPreviews]);
        setFormData((prev) => ({
          ...prev,
          beforeImages: [...prev.beforeImages, ...files],
        }));
      } else {
        setAfterImagePreviews([...afterImagePreviews, ...newPreviews]);
        setFormData((prev) => ({
          ...prev,
          afterImages: [...prev.afterImages, ...files],
        }));
      }
    }
  };

  const handleRemoveImage = (index, type) => {
    if (type === "before") {
      setBeforeImagePreviews((prev) => prev.filter((_, i) => i !== index));
      setFormData((prev) => ({
        ...prev,
        beforeImages: prev.beforeImages.filter((_, i) => i !== index),
      }));
    } else {
      setAfterImagePreviews((prev) => prev.filter((_, i) => i !== index));
      setFormData((prev) => ({
        ...prev,
        afterImages: prev.afterImages.filter((_, i) => i !== index),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      const formDataToSend = new FormData();
      // Changed field names to match Laravel backend
      formDataToSend.append("service_name", formData.serviceName);
      formDataToSend.append("details", formData.details);
      formDataToSend.append("category_id", formData.categoryId);

      // Changed to use before_images[] for multiple files
      formData.beforeImages.forEach((image) => {
        formDataToSend.append("before_images[]", image);
      });

      // Changed to use after_images[] for multiple files
      formData.afterImages.forEach((image) => {
        formDataToSend.append("after_images[]", image);
      });

      if (selectedItem) {
        await galleryService.updateGalleryItem(selectedItem.id, formDataToSend);
        toast.success("Gallery item updated successfully");
      } else {
        await galleryService.createGalleryItem(formDataToSend);
        toast.success("Gallery item created successfully");
      }

      handleCloseDialog();
      fetchGalleryItems();
    } catch (err) {
      setError("Failed to save gallery item");
      toast.error("Failed to save gallery item");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await galleryService.deleteGalleryItem(id);
      toast.success("Gallery item deleted successfully");
      fetchGalleryItems();
    } catch (err) {
      setError("Failed to delete gallery item");
      toast.error("Failed to delete gallery item");
      console.error(err);
    } finally {
      setLoading(false);
      setOpenDeleteDialog(false);
      setItemToDelete(null);
    }
  };

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setOpenDeleteDialog(true);
  };

  const filteredItems = galleryItems.filter(
    (item) =>
      (item?.serviceName &&
        item?.serviceName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item?.details &&
        item?.details.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const paginatedItems = filteredItems.slice(
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
        <h2>Gallery</h2>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Gallery Item
        </Button>
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search gallery items..."
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
      ) : galleryItems.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No gallery items found. Click "Add Gallery Item" to create one.
        </Alert>
      ) : filteredItems.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No gallery items found matching your search criteria.
        </Alert>
      ) : (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Service Name</TableCell>
                  <TableCell>Details</TableCell>
                  <TableCell>Before Images</TableCell>
                  <TableCell>After Images</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedItems.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>

                    <TableCell>{item?.service_name}</TableCell>
                    <TableCell>{item?.details}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {item?.before_images?.map((image, idx) => (
                          <img
                            key={idx}
                            src={`${IMAGE_BASEURL}${image}`}
                            alt={`Before ${idx + 1}`}
                            style={{
                              width: 50,
                              height: 50,
                              objectFit: "cover",
                            }}
                          />
                        ))}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {item?.after_images?.map((image, idx) => (
                          <img
                            key={idx}
                            src={`${IMAGE_BASEURL}${image}`}
                            alt={`After ${idx + 1}`}
                            style={{
                              width: 50,
                              height: 50,
                              objectFit: "cover",
                            }}
                          />
                        ))}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenDialog(item)}
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteClick(item)}
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
            count={filteredItems.length}
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
          {selectedItem ? "Edit Gallery Item" : "Add New Gallery Item"}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <FormControl fullWidth margin="dense">
              <InputLabel>Category</InputLabel>
              <Select
                value={formData.categoryId}
                label="Category"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    categoryId: e.target.value,
                  }))
                }
                required
              >
                {categories?.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              margin="dense"
              label="Service Name"
              fullWidth
              value={formData.serviceName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  serviceName: e.target.value,
                }))
              }
              required
            />

            <TextField
              margin="dense"
              label="Details"
              fullWidth
              multiline
              rows={3}
              value={formData.details}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, details: e.target.value }))
              }
              required
            />

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Box>
                  <input
                    accept="image/*"
                    type="file"
                    multiple
                    onChange={(e) => handleImageChange(e, "before")}
                    style={{ display: "none" }}
                    id="before-images-upload"
                  />
                  <label htmlFor="before-images-upload">
                    <Button variant="outlined" component="span">
                      Upload Before Images
                    </Button>
                  </label>
                  <Box
                    sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}
                  >
                    {beforeImagePreviews.map((preview, index) => (
                      <Box key={index} sx={{ position: "relative" }}>
                        <img
                          src={preview}
                          alt={`Before ${index + 1}`}
                          style={{
                            width: 100,
                            height: 100,
                            objectFit: "cover",
                          }}
                        />
                        <IconButton
                          size="small"
                          sx={{
                            position: "absolute",
                            top: -8,
                            right: -8,
                            bgcolor: "white",
                            "&:hover": { bgcolor: "white" },
                          }}
                          onClick={() => handleRemoveImage(index, "before")}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  <input
                    accept="image/*"
                    type="file"
                    multiple
                    onChange={(e) => handleImageChange(e, "after")}
                    style={{ display: "none" }}
                    id="after-images-upload"
                  />
                  <label htmlFor="after-images-upload">
                    <Button variant="outlined" component="span">
                      Upload After Images
                    </Button>
                  </label>
                  <Box
                    sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}
                  >
                    {afterImagePreviews.map((preview, index) => (
                      <Box key={index} sx={{ position: "relative" }}>
                        <img
                          src={preview}
                          alt={`After ${index + 1}`}
                          style={{
                            width: 100,
                            height: 100,
                            objectFit: "cover",
                          }}
                        />
                        <IconButton
                          size="small"
                          sx={{
                            position: "absolute",
                            top: -8,
                            right: -8,
                            bgcolor: "white",
                            "&:hover": { bgcolor: "white" },
                          }}
                          onClick={() => handleRemoveImage(index, "after")}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
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
          setItemToDelete(null);
        }}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the gallery item "
          {itemToDelete?.title}"?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDeleteDialog(false);
              setItemToDelete(null);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(itemToDelete?.id)}
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

export default AdminGallery;
