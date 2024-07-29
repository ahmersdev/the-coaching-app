import { Typography } from "@mui/material";
import dayjs from "dayjs";

export const subscriptionColumns = [
  {
    accessorFn: (row: any) => row?.start_date,
    id: "start_date",
    isSortable: true,
    header: "Date",
    cell: (info: any) => dayjs(info?.getValue() * 1000).format("MMM DD, YYYY"),
  },
  {
    accessorFn: (row: any) => row?.plan?.amount,
    id: "amount",
    isSortable: true,
    header: "Amount",
    cell: (info: any) => (
      <Typography variant={"body2"} fontWeight={600} color={"success.600"}>
        ${info?.getValue() / 100}
      </Typography>
    ),
  },
];
