"use client";

import TanstackTable from "@/components/table";
import { Typography } from "@mui/material";
import { alertsColumns, alertsDataArray } from "./alerts.data";

export default function Alerts() {
  return (
    <>
      <Typography variant={"h2"} color={"grey.100"}>
        Clients Who Preferred You!
      </Typography>
      <Typography variant={"h6"} fontWeight={400} color={"grey.100"} mb={2}>
        Please check details & join you clients clients
      </Typography>

      <TanstackTable
        data={alertsDataArray}
        columns={alertsColumns}
        isPagination
      />
    </>
  );
}
