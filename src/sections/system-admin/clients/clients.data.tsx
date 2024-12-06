import { SYSTEM_ADMIN } from "@/constants/routes";
import { Avatar, Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";

export const clientsColumns = [
  {
    accessorFn: (row: any) => row?.client_id,
    id: "name",
    isSortable: true,
    header: "Name",
    cell: (info: any) => (
      <Link
        href={{
          pathname: SYSTEM_ADMIN?.CLIENTS_OVERVIEW,
          query: {
            clientId: info?.getValue(),
            coachId: info?.row?.original?.coach_id,
          },
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
    id: "created_at",
    isSortable: true,
    header: "Registration Date",
    cell: (info: any) => dayjs(info?.getValue()).format("MMM DD, YYYY"),
  },
  {
    accessorFn: (row: any) => row?.coach_name,
    id: "coach_name",
    isSortable: true,
    header: "Trainer Name",
    cell: (info: any) => (
      <Typography variant={"body2"} textTransform={"capitalize"}>
        {info?.getValue()}
      </Typography>
    ),
  },
];
