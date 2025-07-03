import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, CircularProgress, Alert } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { OurPromises } from "../../components/OurPromises";
import WorkingProcess from "../../components/workingProcess";
import publicRoutes from "../../../redux/api/publicRoutes";
import { IMAGE_BASEURL } from "../../../redux/api/http-common";
import ImageComparison from "../../components/ImageComparison";

const Gallery = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await publicRoutes.getAllCategories();
        // Ensure we have an array of categories
        if (Array.isArray(response?.data?.data)) {
          setCategories(response?.data?.data);
        } else {
          console.error("Categories data is not an array:", response.data);
          setCategories([]); // Set empty array as fallback
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch gallery items when a category is selected
  useEffect(() => {
    const fetchGalleryItems = async () => {
      if (!selectedCategory) return;

      try {
        setLoading(true);
        const response = await publicRoutes.getAllGalleryItems(
          selectedCategory.id
        );
        // Ensure we have an array of gallery items
        if (Array.isArray(response?.data?.data)) {
          setGalleryItems(response?.data?.data);
        } else {
          console.error("Gallery items data is not an array:", response?.data);
          setGalleryItems([]); // Set empty array as fallback
        }
      } catch (error) {
        console.error("Error fetching gallery items:", error);
        setGalleryItems([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedProject(null); // Reset selected project when category changes
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Show message if no categories are found
  if (!loading && categories?.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Alert severity="info" sx={{ mb: 2 }}>
          No service categories available at the moment. Please check back
          later.
        </Alert>
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          minHeight: "40vh",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 4 },
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            pointerEvents: "none",
          },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "26px", sm: "45px", md: "60px" },
            lineHeight: { xs: "42px", sm: "55px", md: "70px" },
            textAlign: "center",
            color: "#111111",
            fontFamily: "Inter",
            mb: 4,
          }}
        >
          Our Services{" "}
          <span
            style={{
              background:
                "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Gallery
          </span>
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
          {categories?.map((category) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={category.id}>
              <Box
                onClick={() => handleCategorySelect(category)}
                sx={{
                  position: "relative",
                  height: "130px",
                  overflow: "hidden",
                  backgroundImage: `url(${IMAGE_BASEURL}${category?.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  transform:
                    selectedCategory?.id === category.id
                      ? "scale(1.03)"
                      : "scale(1)",
                  boxShadow:
                    selectedCategory?.id === category.id
                      ? "0 10px 20px rgba(254, 204, 19, 0.3)"
                      : "0 5px 15px rgba(0,0,0,0.1)",
                  borderRadius: "10px",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 10px 20px rgba(254, 204, 19, 0.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      selectedCategory?.id === category.id
                        ? "rgba(254, 204, 19, 0.3)"
                        : "rgba(0,0,0,0.45)",
                    zIndex: 1,
                    transition: "all 0.3s ease",
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontFamily: "Bebas Neue, Inter, sans-serif",
                    fontSize: { xs: "16px", md: "26px" },
                    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                    width: "100%",
                    zIndex: 2,
                    position: "relative",
                    textAlign: "center",
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Projects Grid */}
        {selectedCategory && (
          <>
            {galleryItems?.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Alert severity="info">
                  No gallery items found for this category. Please check back
                  later.
                </Alert>
              </Box>
            ) : (
              <Grid container spacing={4} sx={{ mb: 6 }}>
                {galleryItems?.map((project) => (
                  <Grid size={{ md: 4, sm: 6, xs: 12 }} key={project.id}>
                    <Box
                      onClick={() => handleProjectSelect(project)}
                      sx={{
                        position: "relative",
                        height: "300px",
                        borderRadius: "15px",
                        overflow: "hidden",
                        cursor: "pointer",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                        },
                      }}
                    >
                      <img
                        src={`${IMAGE_BASEURL}${project?.before_images[0]}`}
                        alt={project?.service_name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: 3,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0, 0, 0, 0.001))",
                          color: "white",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, mb: 1 }}
                        >
                          {project?.service_name}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {project?.details}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}

        {/* Before/After Slider */}
        {selectedProject && (
          <Box sx={{ maxWidth: "1400px", margin: "0 auto" }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                mb: 4,
                fontWeight: 700,
                color: "#111111",
                fontSize: { xs: "24px", md: "32px" },
                fontFamily: "Inter",
              }}
            >
              {selectedProject?.service_name}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                mb: 6,
                color: "#666",
                maxWidth: "800px",
                margin: "0 auto 48px",
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: 1.6,
              }}
            >
              {selectedProject?.details}
            </Typography>

            {selectedProject?.before_images?.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Alert severity="info">
                  No before/after images available for this project.
                </Alert>
              </Box>
            ) : (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                className="comparison-swiper"
                sx={{
                  "& .swiper-button-next, & .swiper-button-prev": {
                    color: "#FECC13",
                    "&:after": {
                      fontSize: "24px",
                    },
                  },
                  "& .swiper-pagination-bullet-active": {
                    background: "#FECC13",
                  },
                }}
              >
                {selectedProject?.before_images?.map((beforeImage, index) => {
                  const afterImage = selectedProject?.after_images[index];
                  if (!afterImage) return null;

                  return (
                    <SwiperSlide key={`comparison-${index}`}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: { xs: 2, md: 4 },
                        }}
                      >
                        <ImageComparison
                          beforeImage={`${IMAGE_BASEURL}${beforeImage}`}
                          afterImage={`${IMAGE_BASEURL}${afterImage}`}
                        />
                      </Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </Box>
        )}

        {/* Add custom styles for the Swiper */}
        <style>
          {`
            .comparison-swiper .swiper-button-next,
            .comparison-swiper .swiper-button-prev {
              color: #FECC13;
              background: rgba(255, 255, 255, 0.9);
              width: 40px;
              height: 40px;
              border-radius: 50%;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
            .comparison-swiper .swiper-button-next:after,
            .comparison-swiper .swiper-button-prev:after {
              font-size: 20px;
            }
            .comparison-swiper .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background: #ddd;
              opacity: 1;
            }
            .comparison-swiper .swiper-pagination-bullet-active {
              background: #FECC13;
            }
          `}
        </style>
      </Box>
      <WorkingProcess />
      <OurPromises />
    </>
  );
};

export default Gallery;
