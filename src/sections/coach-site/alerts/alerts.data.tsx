import { CLIENT_ALERTS_STATUSES } from "@/constants";
import { COACH_SITE } from "@/constants/routes";
import { Avatar, Box, Button, Chip, Typography } from "@mui/material";
import Link from "next/link";

export const alertsColumns = [
  {
    accessorFn: (row: any) => row?.client_id,
    id: "name",
    isSortable: true,
    header: "Name",
    cell: (info: any) => (
      <Link
        href={{
          pathname: COACH_SITE?.CLIENTS_ALERTS_OVERVIEW,
          query: { clientId: info?.getValue() },
        }}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Avatar
            src={info?.row?.original?.client_details?.profile_picture}
            sx={{ width: 36, height: 36 }}
          />
          <Box color={"grey.100"}>
            <Typography variant={"body2"} textTransform={"capitalize"}>
              {info?.row?.original?.client_details?.full_name}
            </Typography>
            <Typography variant={"body1"} fontWeight={600} color={"grey.400"}>
              @{info?.row?.original?.client_details?.username}
            </Typography>
          </Box>
        </Box>
      </Link>
    ),
  },
  {
    accessorFn: (row: any) => row?.client_details?.email,
    id: "email",
    isSortable: true,
    header: "Email",
    cell: (info: any) => info?.getValue(),
  },
  {
    accessorFn: (row: any) => row?.message,
    id: "status",
    isSortable: true,
    header: "Status",
    cell: (info: any) => (
      <Chip
        label={info?.getValue()}
        sx={{
          color: "grey.100",
          backgroundColor: "primary.main",
          textTransform: "capitalize",
        }}
      />
    ),
  },
  {
    accessorFn: (row: any) => row?.coach_status,
    id: "action",
    header: "Action",
    cell: (info: any) =>
      info?.getValue() === CLIENT_ALERTS_STATUSES.APPROVED ? (
        <Button
          variant={"contained"}
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
          Approved
        </Button>
      ) : info?.getValue() === CLIENT_ALERTS_STATUSES.REJECTED ? (
        <Button
          variant={"contained"}
          sx={{
            color: "error.700",
            borderRadius: 25,
            border: "1px dashed",
            borderColor: "error.700",
            background: "transparent",
            ":hover": {
              backgroundColor: "error.700",
              color: "grey.100",
            },
          }}
          disableElevation
        >
          Rejected
        </Button>
      ) : (
        <>
          <Button
            variant={"contained"}
            sx={{
              color: "grey.100",
              borderRadius: 25,
              border: "1px dashed",
              borderColor: "grey.100",
              background: "transparent",
              mr: 1,
              ":hover": {
                backgroundColor: "grey.100",
                color: "grey.900",
              },
            }}
            disableElevation
          >
            Approve
          </Button>
          <Button
            variant={"contained"}
            sx={{
              color: "error.700",
              borderRadius: 25,
              border: "1px dashed",
              borderColor: "error.700",
              background: "transparent",
              ":hover": {
                backgroundColor: "error.700",
                color: "grey.100",
              },
            }}
            disableElevation
          >
            Reject
          </Button>
        </>
      ),
  },
];
