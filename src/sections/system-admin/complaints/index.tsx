"use client";

import { Avatar, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Reply from "./reply";
import { useGetAdminComplaintsQuery } from "@/services/admin/complaints";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonTable } from "@/components/skeletons";

const Complaints = () => {
  const [reply, setReply] = useState({ open: false, data: null });
  const { data, isLoading, isFetching, isError } = useGetAdminComplaintsQuery(
    null,
    { refetchOnMountOrArgChange: true }
  );

  if (isError) return <ApiErrorState />;

  if (isLoading || isFetching) return <SkeletonTable />;

  return (
    <>
      <Typography variant={"h5"} fontWeight={700} pb={1}>
        All complaints from different clients
      </Typography>

      {!!!data.length ? (
        <Box bgcolor={"secondary.main"} borderRadius={3} padding={2.4}>
          <Typography variant={"h6"} fontWeight={700} textAlign={"center"}>
            No Complaints Found!
          </Typography>
        </Box>
      ) : (
        data?.map((item: any, index: any) => (
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
              <Avatar
                src={item?.src}
                variant={"rounded"}
                sx={{
                  bgcolor: "primary.main",
                }}
              />
              <Typography variant={"h5"} fontWeight={400}>
                {item?.complaint ?? "---"}
              </Typography>
            </Box>
            <Button
              variant={"contained"}
              onClick={() => setReply({ open: true, data: item })}
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
        ))
      )}

      {reply && <Reply reply={reply} setReply={setReply} />}
    </>
  );
};

export default Complaints;
