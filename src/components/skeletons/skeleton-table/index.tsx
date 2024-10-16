import { Box, Skeleton } from "@mui/material";
import { sxStylesOfSkeletons } from "../skeletons.data";

const SkeletonTable = ({ length = 5 }: any) => {
  return (
    <Box
      border={1}
      borderRadius={4.5}
      borderColor={"secondary.800"}
      overflow={"hidden"}
    >
      <Skeleton
        variant={"rounded"}
        width={"100%"}
        height={50}
        sx={{
          bgcolor: "grey.800",
          border: 1,
          borderColor: "secondary.800",
        }}
      />
      {Array.from({ length })?.map((item: any, id: any) => (
        <Box
          key={item ?? `skeleton+${id}`}
          borderBottom={1}
          borderColor={"secondary.800"}
          p={2}
        >
          <Skeleton
            animation={"wave"}
            variant={"rounded"}
            width={"95%"}
            height={50}
            sx={{
              ...sxStylesOfSkeletons,
              margin: "auto",
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SkeletonTable;
