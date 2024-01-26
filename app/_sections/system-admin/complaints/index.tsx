"use client";

import { Avatar, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { complaintsDataArray } from "./complaints.data";
import Reply from "./reply";

const Complaints = () => {
  const [reply, setReply] = useState(false);

  return (
    <>
      <Typography variant={"h5"} fontWeight={700} pb={1}>
        All complaints from different clients
      </Typography>

      {complaintsDataArray?.map((item: any, index: any) => (
        <Box
          key={index}
          bgcolor={"secondary.main"}
          borderRadius={3}
          padding={2.4}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent={{ xs: "center", sm: "space-between" }}
          alignItems={"center"}
          my={1}
          gap={1}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={"center"}
            gap={2}
          >
            <Avatar src={item?.src} variant="rounded" />
            <Typography variant={"h5"} fontWeight={400}>
              {item?.message}
            </Typography>
          </Box>
          <Button
            variant={"contained"}
            onClick={() => setReply(true)}
            sx={{
              color: "grey.100",
              borderRadius: 25,
              border: "1px dashed",
              borderColor: "grey.100",
              background: "transparent",
              ":hover": {
                backgroundColor: "grey.100",
                color: "grey.900",
              },
            }}
            disableElevation
          >
            Reply
          </Button>
        </Box>
      ))}

      {reply && <Reply reply={reply} setReply={setReply} />}
    </>
  );
};

export default Complaints;
