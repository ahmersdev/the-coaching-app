import { NextIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";
import { Avatar, Box, Chip, Typography } from "@mui/material";
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
          pathname: COACH_SITE?.CLIENTS_OVERVIEW,
          query: { clientId: info?.getValue() },
        }}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Avatar
            src={info?.row?.original?.profile_picture}
            sx={{ width: 36, height: 36 }}
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
    accessorFn: (row: any) => row?.is_diet_assigned,
    id: "dietPlanStatus",
    header: "Diet Plan Status",
    cell: (info: any) => (
      <Box display={"flex"} alignItems={"end"} gap={1}>
        <Chip
          label={info?.getValue() ? "Assigned" : "Not Assigned"}
          sx={{
            color: "grey.100",
            width: 110,
            backgroundColor: info?.getValue() ? "primary.main" : "error.700",
          }}
        />
        <Link
          href={{
            pathname: COACH_SITE?.CLIENTS_ASSIGN_DIET,
            query: { clientId: info?.row?.original?.client_id },
          }}
        >
          <NextIcon />
        </Link>
      </Box>
    ),
  },
  {
    accessorFn: (row: any) => row?.is_training_assigned,
    id: "workoutPlanStatus",
    header: "Workout Plan Status",
    cell: (info: any) => (
      <Box display={"flex"} alignItems={"end"} gap={1}>
        <Chip
          label={info?.getValue() ? "Assigned" : "Not Assigned"}
          sx={{
            color: "grey.100",
            width: 110,
            backgroundColor: info?.getValue() ? "primary.main" : "error.700",
          }}
        />
        <Link
          href={{
            pathname: COACH_SITE?.CLIENTS_ASSIGN_WORKOUT,
            query: { clientId: info?.row?.original?.client_id },
          }}
        >
          <NextIcon />
        </Link>
      </Box>
    ),
  },
  {
    accessorFn: (row: any) => row?.is_macro_assigned,
    id: "macroPlanStatus",
    header: "Macro Plan Status",
    cell: (info: any) => (
      <Box display={"flex"} alignItems={"end"} gap={1}>
        <Chip
          label={info?.getValue() ? "Assigned" : "Not Assigned"}
          sx={{
            color: "grey.100",
            width: 110,
            backgroundColor: info?.getValue() ? "primary.main" : "error.700",
          }}
        />
        <Link
          href={{
            pathname: COACH_SITE?.CLIENTS_ASSIGN_MACRO_PLANS,
            query: { clientId: info?.row?.original?.client_id },
          }}
        >
          <NextIcon />
        </Link>
      </Box>
    ),
  },
];
