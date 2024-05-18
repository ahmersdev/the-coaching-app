import { SYSTEM_ADMIN } from "@/constants/routes";
import { Avatar, Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";

export const clientsDataArray = [
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
  {
    id: 6,
    name: "Mike Torello",
    username: "m_Torello",
    src: "https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_640.jpg",
    email: "torello@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    trainerName: "Mike Torello",
  },
  {
    id: 7,
    name: "Peter Thornton",
    username: "p_Thornton",
    src: "https://cdn.pixabay.com/photo/2016/11/22/22/25/abs-1850926_640.jpg",
    email: "thornton@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    trainerName: "Lynn Tanner",
  },
  {
    id: 8,
    name: "Mike Torello",
    username: "m_Torello",
    src: "https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_640.jpg",
    email: "mike@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    trainerName: "Murdock",
  },
  {
    id: 9,
    name: "Devon Miles",
    username: "d_Miles",
    src: "https://cdn.pixabay.com/photo/2020/06/12/00/11/boxing-5288635_640.jpg",
    email: "devon@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    trainerName: "Lynn Tanner",
  },
  {
    id: 10,
    name: "Jonathan Higgins",
    username: "j_Higgins",
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_640.jpg",
    email: "higgins@gmail.com",
    registrationDate: "2023-11-06T10:34:00.891Z",
    trainerName: "Kate Tanner",
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
          pathname: SYSTEM_ADMIN?.CLIENTS_OVERVIEW,
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
    accessorFn: (row: any) => row?.trainerName,
    id: "trainerName",
    isSortable: true,
    header: "Trainer Name",
    cell: (info: any) => info?.getValue(),
  },
];
