import { NextIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";

export const clientsData = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    name: "B.A. Baracus",
    username: "b_Baracus",
    email: "higgins@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    dietPlanStatus: true,
    workoutPlanStatus: true,
    macroPlanStatus: true,
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg",
    name: "Peter Thornton",
    username: "p_Thornton",
    email: "higgins@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    dietPlanStatus: false,
    workoutPlanStatus: false,
    macroPlanStatus: false,
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg",
    name: "Rick Wright",
    username: "w_Rick",
    email: "higgins@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    dietPlanStatus: true,
    workoutPlanStatus: false,
    macroPlanStatus: true,
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_640.jpg",
    name: "Sledge Hammer",
    username: "s_Hammer",
    email: "higgins@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    dietPlanStatus: false,
    workoutPlanStatus: true,
    macroPlanStatus: true,
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_640.jpg",
    name: "B.A. Baracus",
    username: "b_Baracus",
    email: "higgins@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    dietPlanStatus: true,
    workoutPlanStatus: true,
    macroPlanStatus: false,
  },
];

export const clientsColumns = [
  {
    accessorFn: (row: any) => row?.id,
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
    accessorFn: (row: any) => row?.registrationDate,
    id: "registrationDate",
    isSortable: true,
    header: "Registration Date",
    cell: (info: any) => dayjs(info?.getValue()).format("MMM DD, YYYY"),
  },
  {
    accessorFn: (row: any) => row?.dietPlanStatus,
    id: "dietPlanStatus",
    header: "Diet Plan Status",
    cell: (info: any) =>
      info?.getValue() ? (
        <Box display={"flex"} alignItems={"end"} gap={1}>
          <Chip
            label={"Assigned"}
            sx={{
              color: "grey.100",
              width: 110,
              backgroundColor: "primary.main",
            }}
          />
          <Link
            href={{
              pathname: COACH_SITE?.CLIENTS_ASSIGN_DIET,
              query: { clientId: info?.row?.original?.id },
            }}
          >
            <NextIcon />
          </Link>
        </Box>
      ) : (
        <Box display={"flex"} alignItems={"end"} gap={1}>
          <Chip
            label={"Not Assigned"}
            sx={{
              color: "grey.100",
              width: 110,
              backgroundColor: "error.700",
            }}
          />
          <Link
            href={{
              pathname: COACH_SITE?.CLIENTS_ASSIGN_DIET,
              query: { clientId: info?.row?.original?.id },
            }}
          >
            <NextIcon />
          </Link>
        </Box>
      ),
  },
  {
    accessorFn: (row: any) => row?.workoutPlanStatus,
    id: "workoutPlanStatus",
    header: "Workout Plan Status",
    cell: (info: any) =>
      info?.getValue() ? (
        <Box display={"flex"} alignItems={"end"} gap={1}>
          <Chip
            label={"Assigned"}
            sx={{
              color: "grey.100",
              width: 110,
              backgroundColor: "primary.main",
            }}
          />
          <Link
            href={{
              pathname: COACH_SITE?.CLIENTS_ASSIGN_WORKOUT,
              query: { clientId: info?.row?.original?.id },
            }}
          >
            <NextIcon />
          </Link>
        </Box>
      ) : (
        <Box display={"flex"} alignItems={"end"} gap={1}>
          <Chip
            label={"Not Assigned"}
            sx={{
              color: "grey.100",
              width: 110,
              backgroundColor: "error.700",
            }}
          />
          <Link
            href={{
              pathname: COACH_SITE?.CLIENTS_ASSIGN_WORKOUT,
              query: { clientId: info?.row?.original?.id },
            }}
          >
            <NextIcon />
          </Link>
        </Box>
      ),
  },
  {
    accessorFn: (row: any) => row?.macroPlanStatus,
    id: "macroPlanStatus",
    header: "Macro Plan Status",
    cell: (info: any) =>
      info?.getValue() ? (
        <Box display={"flex"} alignItems={"end"} gap={1}>
          <Chip
            label={"Assigned"}
            sx={{
              color: "grey.100",
              width: 110,
              backgroundColor: "primary.main",
            }}
          />
          <Link
            href={{
              pathname: COACH_SITE?.CLIENTS_ASSIGN_MACRO_PLANS,
              query: { clientId: info?.row?.original?.id },
            }}
          >
            <NextIcon />
          </Link>
        </Box>
      ) : (
        <Box display={"flex"} alignItems={"end"} gap={1}>
          <Chip
            label={"Not Assigned"}
            sx={{
              color: "grey.100",
              width: 110,
              backgroundColor: "error.700",
            }}
          />
          <Link
            href={{
              pathname: COACH_SITE?.CLIENTS_ASSIGN_MACRO_PLANS,
              query: { clientId: info?.row?.original?.id },
            }}
          >
            <NextIcon />
          </Link>
        </Box>
      ),
  },
];
