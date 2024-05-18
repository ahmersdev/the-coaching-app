import { WorkoutDayIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";
import { AddCircle } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Training() {
  const searchParams = useSearchParams();
  const clientId = searchParams.get("clientId");

  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={1}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <WorkoutDayIcon />
          <Typography variant={"h6"} fontWeight={700}>
            Training Programs
          </Typography>
        </Box>
        <Link
          href={{
            pathname: COACH_SITE?.CLIENTS_ASSIGN_DIET,
            query: { clientId },
          }}
        >
          <Button
            variant={"contained"}
            startIcon={<AddCircle />}
            sx={{
              color: "grey.100",
              borderRadius: 25,
              border: "1px dashed",
              borderColor: "grey.100",
              background: "transparent",
              ":hover": {
                backgroundColor: "grey.100",
                color: "grey.900",
              },
            }}
            disableElevation
          >
            Assign
          </Button>
        </Link>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant={"body1"}
        textAlign={"center"}
        color={"grey.500"}
        py={2}
      >
        No Training Programs Assign Yet
      </Typography>
    </Box>
  );
}
