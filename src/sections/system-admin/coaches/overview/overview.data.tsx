import { Avatar, Box, Typography } from "@mui/material";
import dayjs from "dayjs";

export const getCoachDetailsData = (data: any) => ({
  Name: data?.full_name ?? "---",
  "User Handle": data?.username ?? "---",
  Email: data?.email ?? "---",
  "Gym Name": "---",
  "Registration Date": data?.created_at,
  "Subscription Status": "---",
});

export const coachOverviewColumns = [
  {
    accessorFn: (row: any) => row?.client_id,
    id: "name",
    isSortable: true,
    header: "Name",
    cell: (info: any) => (
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
