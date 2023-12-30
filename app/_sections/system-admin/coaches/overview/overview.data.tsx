import { Avatar, Box, Typography } from "@mui/material";
import dayjs from "dayjs";

export const headerOverviewData = [
  { Name: "Angus MacGyver" },
  { "User Handle": "a_MacGyver" },
  { Email: "angusmacGyver@gmail.com" },
  { "Gym Name": "Mike Torello" },
  { "Registration Date": "2023-11-06T10:34:00.891Z" },
  { "Subscription Status": "Paid" },
];

export const coachesOverviewDataArray = [
  {
    id: 1,
    name: "Angus MacGyver",
    username: "a_MacGyver",
    src: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    email: "angusmacGyver@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    trainerName: "Mike Torello",
  },
  {
    id: 2,
    name: "Michael Knight",
    username: "m_Knight",
    src: "https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg",
    email: "michaelknight@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    trainerName: "Devon Miles",
  },
  {
    id: 3,
    name: "Dr. Bonnie Barstow",
    username: "d_Barstow",
    src: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg",
    email: "barstow@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    trainerName: "April Curtis",
  },
  {
    id: 4,
    name: "Lynn Tanner",
    username: "l_Tanner",
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_640.jpg",
    email: "tanner@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    trainerName: "B.A. Baracus",
  },
  {
    id: 5,
    name: "Sledge Hammer",
    username: "s_Hammer",
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_640.jpg",
    email: "hammer@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    trainerName: "Lynn Tanner",
  },
];

export const coachOverviewColumns = [
  {
    accessorFn: (row: any) => row?.id,
    id: "name",
    isSortable: true,
    header: "Name",
    cell: (info: any) => (
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Avatar src={info?.row?.original?.src} sx={{ width: 36, height: 36 }} />
        <Box color={"grey.100"}>
          <Typography variant={"body2"}>{info?.row?.original?.name}</Typography>
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
    accessorFn: (row: any) => row?.registrationDate,
    id: "registrationDate",
    isSortable: true,
    header: "Registration Date",
    cell: (info: any) => dayjs(info?.getValue()).format("MMM DD, YYYY"),
  },
  {
    accessorFn: (row: any) => row?.trainerName,
    id: "trainerName",
    isSortable: true,
    header: "Trainer Name",
    cell: (info: any) => info?.getValue(),
  },
];
