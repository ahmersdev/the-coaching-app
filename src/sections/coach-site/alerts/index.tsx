"use client";

import TanstackTable from "@/components/table";
import { Typography } from "@mui/material";
import useAlerts from "./use-alerts";

export default function Alerts() {
  const { data, isLoading, isFetching, isError, alertsColumns } = useAlerts();

  return (
    <>
      <Typography variant={"h2"} color={"grey.100"}>
        Clients Who Preferred You!
      </Typography>
      <Typography variant={"h6"} fontWeight={400} color={"grey.100"} mb={2}>
        Please check details & join you clients clients
      </Typography>

      <TanstackTable
        data={data?.details}
        columns={alertsColumns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isPagination
      />
    </>
  );
}
