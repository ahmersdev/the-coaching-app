import TanstackTable from "@/components/table";
import { Grid, Typography } from "@mui/material";
import { subscriptionColumns } from "./subscription.data";
import { useGetCoachSubscriptionsQuery } from "@/services/coach-site/settings";

export default function Subscription({ coach_id }: any) {
  const { data, isLoading, isFetching, isError, isSuccess } =
    useGetCoachSubscriptionsQuery(
      {
        coach_id,
      },
      { refetchOnMountOrArgChange: true, skip: !coach_id }
    );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant={"h6"} fontWeight={700} color={"grey.100"}>
            Recent Subscription
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TanstackTable
            data={data?.data}
            columns={subscriptionColumns}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
            isSuccess={isSuccess}
          />
        </Grid>
      </Grid>
    </>
  );
}
