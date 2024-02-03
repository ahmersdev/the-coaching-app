"use client";

import TanstackTable from "@/app/_components/table";
import { Typography, useTheme } from "@mui/material";
import { getAlertsColumns, alertsDataArray } from "./alerts.data";

export default function Alerts() {
  const theme: any = useTheme();
  const alertsColumns = getAlertsColumns(theme);

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
