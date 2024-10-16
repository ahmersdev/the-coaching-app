"use client";

import TanstackTable from "@/components/table";
import { Typography } from "@mui/material";
import { alertsColumns } from "./alerts.data";
import { useGetClientAlertsQuery } from "@/services/coach-site/alerts";

export default function Alerts() {
  const { data, isLoading, isFetching, isError } = useGetClientAlertsQuery(
    null,
    { refetchOnMountOrArgChange: true }
  );

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
