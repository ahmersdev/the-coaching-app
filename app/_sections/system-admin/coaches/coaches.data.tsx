import dayjs from "dayjs";

export const coachesDataArray = [
  {
    id: 1,
    name: "Andrea's laptop",
    email: "Andrea",
    gymName: "IT",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Paid",
  },
  {
    id: 2,
    name: "Andrea's laptop",
    email: "Andrea",
    gymName: "IT",
    registrationDate: "2023-11-06T10:34:00.891Z",
    status: "Unpaid",
  },
];

export const coachesColumns = [
  {
    accessorFn: (row: any) => row?.name,
    id: "name",
    isSortable: true,
    header: "Name",
    cell: (info: any) => info?.getValue(),
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
    cell: (info: any) => info?.getValue(),
  },
];
