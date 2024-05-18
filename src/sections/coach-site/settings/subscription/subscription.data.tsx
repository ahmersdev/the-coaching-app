import { Typography } from "@mui/material";
import dayjs from "dayjs";

export const subscriptionDataArray = [
  {
    id: 1,
    date: "2023-11-06T10:34:00.891Z",
    amount: "29.00",
  },
  {
    id: 2,
    date: "2023-11-06T10:34:00.891Z",
    amount: "31.00",
  },
  {
    id: 3,
    date: "2023-11-06T10:34:00.891Z",
    amount: "30.00",
  },
  {
    id: 4,
    date: "2023-11-06T10:34:00.891Z",
    amount: "32.00",
  },
  {
    id: 5,
    date: "2023-11-06T10:34:00.891Z",
    amount: "33.00",
  },
];

export const subscriptionColumns = [
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
