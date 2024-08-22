import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  Skeleton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { LoadingButton } from "@mui/lab";
import { pxToRem } from "@/utils/get-font-value";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { CarousalBackArrowIcon, CarousalNextArrowIcon } from "@/assets/icons";
import useDetailsDialog from "./use-details-dialog";
import SingleImg from "./single-img";

export default function DetailsDialog({ showDetails, setShowDetails }: any) {
  const {
    theme,
    methods,
    handleSubmit,
    onSubmit,
    detailsData,
    loadingImages,
    setLoadingImages,
    updateClientFeedbackStatus,
    singleImageView,
    setSingleImageView,
    mappedAnswers,
  } = useDetailsDialog({ showDetails, setShowDetails });

  return (
    <>
      <Dialog
        open={showDetails?.open}
        onClose={() => setShowDetails({ open: false, details: null })}
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            bgcolor: "secondary.900",
            paddingBottom: 2,
            borderRadius: 5,
            maxWidth: theme.breakpoints.values.md - 100,
            maxHeight: "80vh",
          },
        }}
      >
        <DialogTitle>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Typography variant={"h3"} color={"grey.100"}>
              Progress Details
            </Typography>
            <CloseIcon
              sx={{ cursor: "pointer", color: "grey.100" }}
              onClick={() => setShowDetails({ open: false, details: null })}
            />
          </Box>
        </DialogTitle>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Grid container spacing={2}>
              {Object?.entries(detailsData)?.map(
                ([key, value], index, array) => (
                  <Grid item xs={12} sm={6} key={key}>
                    <Box
                      borderRight={index !== array.length - 1 ? 1 : 0}
                      borderColor={"grey.800"}
                      mr={5}
                    >
                      <Typography
                        variant={"body1"}
                        fontWeight={500}
                        color={"grey.400"}
                      >
                        {key}:
                      </Typography>
                      <Typography variant={"h6"} color={"grey.100"} mt={0.5}>
                        {value} inches
                      </Typography>
                    </Box>
                  </Grid>
                )
              )}

              <Grid item xs={12} my={2}>
                <Swiper
                  effect={"coverflow"}
                  centeredSlides={true}
                  grabCursor={false}
                  draggable={false}
                  simulateTouch={false}
                  allowTouchMove={false}
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={12}
                  speed={500}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                  }}
                  navigation={{
                    nextEl: ".progress-images-next",
                    prevEl: ".progress-images-prev",
                  }}
                  modules={[EffectCoverflow, Navigation, Pagination]}
                  className="mySwiper"
                  style={{ width: "100%" }}
                  breakpoints={{
                    900: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {showDetails.details?.check_in_pictures?.map(
                    (item: any, index: number) => (
                      <SwiperSlide
                        key={index}
                        style={{
                          backgroundColor: "transparent",
                          borderRadius: 6,
                          height: "100%",
                        }}
                      >
                        <Box
                          position="relative"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          onClick={() =>
                            setSingleImageView({
                              openSingle: true,
                              singleImg: item?.picture,
                            })
                          }
                          sx={{ cursor: "pointer" }}
                        >
                          {loadingImages[index] && (
                            <Skeleton
                              variant="rectangular"
                              width={200}
                              height={200}
                              sx={{ borderRadius: 12 }}
                            />
                          )}
                          <Image
                            src={item?.picture}
                            alt={"Progress Pictures"}
                            width={200}
                            height={200}
                            style={{
                              width: "100%",
                              objectFit: "cover",
                              objectPosition: "center center",
                              borderRadius: 12,
                              opacity: loadingImages[index] ? 0 : 1,
                              transition: "opacity 0.3s ease-in-out",
                            }}
                            onLoadingComplete={() =>
                              setLoadingImages((prev) =>
                                prev.map((_, i) =>
                                  i === index ? false : prev[i]
                                )
                              )
                            }
                            onLoadStart={() =>
                              setLoadingImages((prev) => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                              })
                            }
                          />
                        </Box>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>

                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1.2}
                  mt={2}
                >
                  <Box
                    className="progress-images-prev"
                    sx={{ cursor: "pointer" }}
                  >
                    <CarousalBackArrowIcon
                      fill={theme?.palette?.common?.white}
                      stroke={theme?.palette?.secondary?.main}
                    />
                  </Box>
                  <Box
                    className="progress-images-next"
                    sx={{ cursor: "pointer" }}
                  >
                    <CarousalNextArrowIcon
                      fill={theme?.palette?.common?.white}
                      stroke={theme?.palette?.secondary?.main}
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography variant={"h6"} color={"grey.100"}>
                    Client Question:
                  </Typography>

                  <Grid container spacing={2}>
                    {Object?.entries(mappedAnswers)?.map(
                      ([key, value]: any) => (
                        <Grid item xs={12} key={key} color={"grey.400"}>
                          <Box display={"flex"} alignItems={"center"} gap={1}>
                            <FiberManualRecordIcon
                              sx={{ fontSize: pxToRem(10) }}
                            />
                            <Typography variant={"body1"}>{key}</Typography>
                          </Box>
                          <Box display={"flex"} gap={1}>
                            <Typography variant={"body1"} fontWeight={800}>
                              A
                            </Typography>
                            <Typography variant={"body1"}>{value}</Typography>
                          </Box>
                        </Grid>
                      )
                    )}
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <RHFTextField
                  name={"feedback"}
                  label={"Add Feedback"}
                  placeholder={"Add Personal Feedback...."}
                  multiline
                  rows={3}
                  bgcolor={"secondary.800"}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ marginX: 2.4, padding: 0 }}>
            <Button
              variant={"contained"}
              sx={{
                color: "grey.100",
                borderRadius: 25,
                border: "1px dashed",
                borderColor: "grey.100",
                background: "transparent",
                width: 111,
                ":hover": {
                  backgroundColor: "grey.100",
                  color: "grey.900",
                },
              }}
              disableElevation
              type={"button"}
              onClick={() => setShowDetails({ open: false, details: null })}
            >
              Close
            </Button>
            <LoadingButton
              variant={"contained"}
              sx={{
                color: "grey.100",
                width: 111,
                borderRadius: 25,
                border: "1px solid",
                borderColor: "primary.main",
              }}
              disableElevation
              type={"submit"}
              loading={updateClientFeedbackStatus?.isLoading}
            >
              Submit
            </LoadingButton>
          </DialogActions>
        </FormProvider>
      </Dialog>

      {singleImageView?.openSingle && (
        <SingleImg
          singleImageView={singleImageView}
          setSingleImageView={setSingleImageView}
        />
      )}
    </>
  );
}
