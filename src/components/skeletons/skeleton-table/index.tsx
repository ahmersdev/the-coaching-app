import { Grid, Skeleton } from "@mui/material";

const SkeletonTable = ({ height = 48 }: any) => {
  return (
    <Grid container spacing={2}>
      {[1, 2, 3, 4, 5]?.map((item: any) => (
        <Grid item xs={12} key={item}>
          <Skeleton
            variant="rectangular"
            height={height}
            sx={{ bgcolor: "grey.700", borderRadius: 2 }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonTable;
