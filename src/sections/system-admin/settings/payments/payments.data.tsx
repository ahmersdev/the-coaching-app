import { Avatar, Box, Typography } from "@mui/material";
import dayjs from "dayjs";

export const paymentsDataArray = [
  {
    id: 1,
    name: "Angus MacGyver",
    username: "a_MacGyver",
    src: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    date: "2023-11-06T10:34:00.891Z",
    amount: "29.00",
  },
  {
    id: 2,
    name: "Michael Knight",
    username: "m_Knight",
    src: "https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg",
    date: "2023-11-06T10:34:00.891Z",
    amount: "31.00",
  },
  {
    id: 3,
    name: "Dr. Bonnie Barstow",
    username: "d_Barstow",
    src: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg",
    date: "2023-11-06T10:34:00.891Z",
    amount: "30.00",
  },
  {
    id: 4,
    name: "Lynn Tanner",
    username: "l_Tanner",
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_640.jpg",
    date: "2023-11-06T10:34:00.891Z",
    amount: "32.00",
  },
  {
    id: 5,
    name: "Sledge Hammer",
    username: "s_Hammer",
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_640.jpg",
    date: "2023-11-06T10:34:00.891Z",
    amount: "33.00",
  },
  {
    id: 6,
    name: "Mike Torello",
    username: "m_Torello",
    src: "https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_640.jpg",
    date: "2023-11-06T10:34:00.891Z",
    amount: "34.00",
  },
  {
    id: 7,
    name: "Peter Thornton",
    username: "p_Thornton",
    src: "https://cdn.pixabay.com/photo/2016/11/22/22/25/abs-1850926_640.jpg",
    date: "2023-11-06T10:34:00.891Z",
    amount: "35.00",
  },
  {
    id: 8,
    name: "Mike Torello",
    username: "m_Torello",
    src: "https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_640.jpg",
    date: "2023-11-06T10:34:00.891Z",
    amount: "36.00",
  },
  {
    id: 9,
    name: "Devon Miles",
    username: "d_Miles",
    src: "https://cdn.pixabay.com/photo/2020/06/12/00/11/boxing-5288635_640.jpg",
    date: "2023-11-06T10:34:00.891Z",
    amount: "37.00",
  },
  {
    id: 10,
    name: "Jonathan Higgins",
    username: "j_Higgins",
    src: "https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_640.jpg",
    date: "2023-11-06T10:34:00.891Z",
    amount: "38.00",
  },
];

export const paymentsColumns = [
  {
    accessorFn: (row: any) => row?.id,
    id: "coach",
    isSortable: true,
    header: "Coach",
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
    accessorFn: (row: any) => row?.date,
    id: "date",
    isSortable: true,
    header: "Date",
    cell: (info: any) => dayjs(info?.getValue()).format("MMM DD, YYYY"),
  },
  {
    accessorFn: (row: any) => row?.amount,
    id: "amount",
    isSortable: true,
    header: "Amount",
    cell: (info: any) => (
      <Typography variant={"body2"} fontWeight={600} color={"success.600"}>
        ${info?.getValue()}
      </Typography>
    ),
  },
];
