"use client";

import CustomAccordion from "@/components/custom-accordion";
import { Box, Button, Typography } from "@mui/material";
import AddFaq from "./add-faq";
import { DeleteIcon } from "@/assets/icons";
import AlertDialog from "@/components/alert-dialog";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonTable } from "@/components/skeletons";
import useFaqs from "./use-faqs";

const Faqs = () => {
  const {
    transformedData,
    isLoading,
    isFetching,
    isError,
    addFaq,
    setAddFaq,
    deleteFaq,
    setDeleteFaq,
    handleDelete,
    deleteAdminFaqStatus,
  } = useFaqs();

  if (isError) return <ApiErrorState />;

  if (isLoading || isFetching) return <SkeletonTable />;

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        pb={2}
      >
        <Typography variant={"h5"} fontWeight={700}>
          All FAQ’s You Created
        </Typography>
        <Button
          variant={"contained"}
          sx={{
            color: "grey.100",
            borderRadius: 25,
            background: "primary.100",
            ":hover": {
              background: "primary.100",
            },
          }}
          onClick={() => setAddFaq(true)}
          disableElevation
        >
          Add FAQ’s
        </Button>
      </Box>
      {!!!transformedData.length ? (
        <Box bgcolor={"secondary.main"} borderRadius={3} padding={2.4}>
          <Typography variant={"h6"} fontWeight={700} textAlign={"center"}>
            No FAQs Found!
          </Typography>
        </Box>
      ) : (
        <Box bgcolor={"secondary.main"} borderRadius={3} padding={1}>
          <CustomAccordion
            accordions={transformedData}
            CustomIcon={DeleteIcon}
            customIconClick={(faq: any) => setDeleteFaq(faq)}
          />
        </Box>
      )}

      {addFaq && <AddFaq addFaq={addFaq} setAddFaq={setAddFaq} />}

      {deleteFaq && (
        <AlertDialog
          type={"delete"}
          message={"Are you sure you want to delete this FAQ’s"}
          open={Boolean(deleteFaq)}
          handleClose={() => setDeleteFaq(null)}
          handleSubmitBtn={() => handleDelete(deleteFaq)}
          loading={deleteAdminFaqStatus?.isLoading}
        />
      )}
    </>
  );
};

export default Faqs;
