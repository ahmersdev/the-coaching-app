import { Box, Grid, Skeleton, useTheme } from "@mui/material";
import { sxStylesOfSkeletons } from "../skeletons.data";

export default function SkeletonCard({ length = 4, gridSize }: any) {
  const theme: any = useTheme();

  return (
    <Grid container spacing={2}>
      {Array?.from({ length })?.map((item: any, id: any) => (
        <Grid key={item ?? `skeleton+${id}`} item xs={12} {...gridSize}>
          <Box
            boxShadow={theme?.CustomShadows?.()?.secondary}
            borderRadius={3}
            overflow={"hidden"}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <Skeleton
              animation={"wave"}
              variant={"rectangular"}
              width={"100%"}
              height={198}
              sx={{
                ...sxStylesOfSkeletons,
              }}
            />

            <Skeleton
              animation={"wave"}
              variant={"rounded"}
              width={"50%"}
              height={20}
              sx={{
                ...sxStylesOfSkeletons,
                mx: 1,
              }}
            />

            <Box display={"flex"} alignItems={"center"} gap={1} m={1}>
              <Skeleton
                animation={"wave"}
                variant={"circular"}
                width={44}
                height={44}
                sx={{
                  bgcolor: "grey.800",
                  border: 1,
                  borderColor: "secondary.800",
                }}
              />
              <Skeleton
                animation={"wave"}
                variant={"rounded"}
                width={"100%"}
                sx={{
                  bgcolor: "grey.800",
                  border: 1,
                  borderColor: "secondary.800",
                }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
