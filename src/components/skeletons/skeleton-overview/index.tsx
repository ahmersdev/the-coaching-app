import { Box, Grid, Skeleton } from "@mui/material";
import { sxStylesOfSkeletons } from "../skeletons.data";

export default function SkeletonOverview() {
  return (
    <>
      {Array.from({ length: 3 }).map((ele: any) => (
        <Box key={ele} bgcolor={"secondary.main"} borderRadius={3} p={2.4}>
          <Grid container spacing={2}>
            {Array?.from({ length: 4 })?.map((item: any, id: any) => (
              <Grid
                key={item ?? `skeleton+${id}`}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <Box borderRight={1} borderColor={"grey.800"} pr={1}>
                  <Skeleton
                    animation={"wave"}
                    variant={"rounded"}
                    width={"50%"}
                    height={20}
                    sx={{
                      ...sxStylesOfSkeletons,
                      mb: 1,
                    }}
                  />

                  <Skeleton
                    animation={"wave"}
                    variant={"rounded"}
                    width={"100%"}
                    height={24}
                    sx={{
                      ...sxStylesOfSkeletons,
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </>
  );
}
