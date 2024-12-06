import { SYSTEM_ADMIN } from "@/constants/routes";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";

export const coachesColumns = [
  {
    accessorFn: (row: any) => row?.coach_id,
    id: "name",
    isSortable: true,
    header: "Name",
    cell: (info: any) => (
      <Link
        href={{
          pathname: SYSTEM_ADMIN?.COACHES_OVERVIEW,
          query: { coachId: info?.getValue() },
        }}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Avatar
            src={info?.row?.original?.profile_picture}
            sx={{ width: 36, height: 36, bgcolor: "primary.main" }}
          />
          <Box color={"grey.100"}>
            <Typography variant={"body2"}>
              {info?.row?.original?.full_name}
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
    accessorFn: (row: any) => row?.created_at,
    id: "registrationDate",
    isSortable: true,
    header: "Registration Date",
    cell: (info: any) => dayjs(info?.getValue()).format("MMM DD, YYYY"),
  },
  {
    accessorFn: (row: any) => row?.subscription_status,
    id: "subscription_status",
    header: "Subscription Status",
    isSortable: true,
    cell: (info: any) => (
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Chip
          label={
            info?.getValue().toLowerCase() === "active" ? "Paid" : "Unpaid"
          }
          sx={{
            color: "grey.100",
            bgcolor:
              info?.getValue().toLowerCase() === "active"
                ? "primary.main"
                : "error.700",
            width: "73px",
            height: "22px",
            fontSize: "12px",
          }}
        />
      </Box>
    ),
  },
];
