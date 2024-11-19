import { Grid, Skeleton } from "@mui/material";

function SkeletonForm(props: any) {
  const { length = 4 } = props;

  return (
    <Grid container spacing={2}>
      {Array?.from({ length })?.map((item: any) => (
        <Grid item xs={12} sm={6} key={item}>
          <Skeleton
            variant="rectangular"
            height={48}
            sx={{ bgcolor: "grey.700", borderRadius: 2 }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default SkeletonForm;
