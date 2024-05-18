import { COACH_SITE } from "@/constants/routes";
import { Avatar, Box, Button, Chip, Typography } from "@mui/material";
import Link from "next/link";

export const alertsDataArray = [
  {
    id: 1,
    name: "Angus MacGyver",
    username: "a_MacGyver",
    src: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    email: "angusmacGyver@gmail.com",
    status: true,
  },
  {
    id: 2,
    name: "Michael Knight",
    username: "m_Knight",
    src: "https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg",
    email: "michaelknight@gmail.com",
    status: false,
  },
  {
    id: 3,
    name: "Dr. Bonnie Barstow",
    username: "d_Barstow",
    src: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg",
    email: "barstow@gmail.com",
    status: true,
  },
  {
    id: 4,
    name: "Lynn Tanner",
    username: "l_Tanner",
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_640.jpg",
    email: "tanner@gmail.com",
    status: false,
  },
];

export const alertsColumns = [
  {
    accessorFn: (row: any) => row?.id,
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
            src={info?.row?.original?.src}
            sx={{ width: 36, height: 36 }}
          />
          <Box color={"grey.100"}>
            <Typography variant={"body2"}>
              {info?.row?.original?.name}
            </Typography>
            <Typography variant={"body1"} fontWeight={600} color={"grey.400"}>
              @{info?.row?.original?.username}
            </Typography>
          </Box>
        </Box>
      </Link>
    ),
  },
  {
    accessorFn: (row: any) => row?.email,
    id: "email",
    isSortable: true,
    header: "Email",
    cell: (info: any) => info?.getValue(),
  },
  {
    accessorFn: (row: any) => row?.status,
    id: "status",
    isSortable: true,
    header: "Status",
    cell: (info: any) =>
      info?.getValue() ? (
        <Chip
          label={"Still Looking For Coach"}
          sx={{
            color: "grey.100",
            backgroundColor: "primary.main",
          }}
        />
      ) : (
        <Chip
          label={"Clients Select Coach"}
          sx={{
            color: "grey.100",
            backgroundColor: "error.700",
          }}
        />
      ),
  },
  {
    accessorFn: (row: any) => row?.status,
    id: "action",
    header: "Action",
    cell: (info: any) =>
      info?.getValue() ? (
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
          Set Status
        </Button>
      ) : (
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
          Remove
        </Button>
      ),
  },
];
