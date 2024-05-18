"use client";

import CustomAccordion from "@/components/custom-accordion";
import { Box, Button, Typography } from "@mui/material";
import { FaqsArray } from "./faqs.data";
import { useState } from "react";
import AddFaq from "./add-faq";
import { DeleteIcon } from "@/assets/icons";
import AlertDialog from "@/components/alert-dialog";
import { successSnackbar } from "@/utils/api";

const Faqs = () => {
  const [addFaq, setAddFaq] = useState(false);
  const [deleteFaq, setDeleteFaq] = useState<any>(null);

  const handleDelete = (faq: any) => {
    successSnackbar("FAQ Deleted Successfully!");
    setDeleteFaq(false);
  };

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
      <Box bgcolor={"secondary.main"} borderRadius={3} padding={1}>
        <CustomAccordion
          accordions={FaqsArray}
          CustomIcon={DeleteIcon}
          customIconClick={(faq: any) => setDeleteFaq(faq)}
        />
      </Box>

      {addFaq && <AddFaq addFaq={addFaq} setAddFaq={setAddFaq} />}

      {deleteFaq && (
        <AlertDialog
          type={"delete"}
          message={"Are you sure you want to delete this FAQ’s"}
          open={Boolean(deleteFaq)}
          handleClose={() => setDeleteFaq(null)}
          handleSubmitBtn={() => handleDelete(deleteFaq)}
        />
      )}
    </>
  );
};

export default Faqs;
