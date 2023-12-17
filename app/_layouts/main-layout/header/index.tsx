import { NotificationIcon } from "@/app/_assets";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { StyledBadge } from "./header.data";

const Header = () => {
  const pathName = usePathname();

  const title = pathName?.slice(1);

  return (
    <Fragment>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"secondary.main"}
        borderRadius={2}
        p={2}
      >
        <Typography
          variant={"h3"}
          color={"grey.100"}
          textTransform={"capitalize"}
        >
          {title}
        </Typography>
        <Box>
          <Stack direction="row" spacing={2}>
            <NotificationIcon />

            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Profile"
                src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                sx={{ width: 35, height: 35 }}
              />
            </StyledBadge>
          </Stack>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Header;
