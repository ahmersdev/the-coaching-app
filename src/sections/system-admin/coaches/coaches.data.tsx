import { RotateLeftIcon } from "@/assets/icons";
import { SYSTEM_ADMIN } from "@/constants/routes";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";

export const coachesDataArray = [
  {
    id: 1,
    name: "Angus MacGyver",
    username: "a_MacGyver",
    src: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    email: "angusmacGyver@gmail.com",
    gymName: "Mike Torello",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Paid",
  },
  {
    id: 2,
    name: "Michael Knight",
    username: "m_Knight",
    src: "https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg",
    email: "michaelknight@gmail.com",
    gymName: "Devon Miles",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Unpaid",
  },
  {
    id: 3,
    name: "Dr. Bonnie Barstow",
    username: "d_Barstow",
    src: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg",
    email: "barstow@gmail.com",
    gymName: "April Curtis",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Unpaid",
  },
  {
    id: 4,
    name: "Lynn Tanner",
    username: "l_Tanner",
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_640.jpg",
    email: "tanner@gmail.com",
    gymName: "B.A. Baracus",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Paid",
  },
  {
    id: 5,
    name: "Sledge Hammer",
    username: "s_Hammer",
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_640.jpg",
    email: "hammer@gmail.com",
    gymName: "Lynn Tanner",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Paid",
  },
  {
    id: 6,
    name: "Mike Torello",
    username: "m_Torello",
    src: "https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_640.jpg",
    email: "torello@gmail.com",
    gymName: "Mike Torello",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Paid",
  },
  {
    id: 7,
    name: "Peter Thornton",
    username: "p_Thornton",
    src: "https://cdn.pixabay.com/photo/2016/11/22/22/25/abs-1850926_640.jpg",
    email: "thornton@gmail.com",
    gymName: "Lynn Tanner",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Unpaid",
  },
  {
    id: 8,
    name: "Mike Torello",
    username: "m_Torello",
    src: "https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_640.jpg",
    email: "mike@gmail.com",
    gymName: "Murdock",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Paid",
  },
  {
    id: 9,
    name: "Devon Miles",
    username: "d_Miles",
    src: "https://cdn.pixabay.com/photo/2020/06/12/00/11/boxing-5288635_640.jpg",
    email: "devon@gmail.com",
    gymName: "Lynn Tanner",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Paid",
  },
  {
    id: 10,
    name: "Jonathan Higgins",
    username: "j_Higgins",
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_640.jpg",
    email: "higgins@gmail.com",
    gymName: "Kate Tanner",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Paid",
  },
];

export const coachesColumns = [
  {
    accessorFn: (row: any) => row?.id,
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
    accessorFn: (row: any) => row?.gymName,
    id: "gymName",
    isSortable: true,
    header: "Gym Name",
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
    accessorFn: (row: any) => row?.status,
    id: "status",
    header: "Subscription Status",
    isSortable: true,
    cell: (info: any) => (
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Chip
          label={info?.getValue()}
          sx={{
            color: "grey.100",
            bgcolor: info?.getValue() === "Paid" ? "primary.main" : "error.700",
            width: "73px",
            height: "22px",
            fontSize: "12px",
          }}
        />
        {info?.getValue() === "Unpaid" && (
          <Box sx={{ cursor: "pointer" }}>
            <RotateLeftIcon />
          </Box>
        )}
      </Box>
    ),
  },
];
