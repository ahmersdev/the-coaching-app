import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { SYSTEM_ADMIN } from "@/constants/routes";
import { Typography } from "@mui/material";

export const StyledBadge = styled(Badge)(({ theme }: any) => ({
  "& .MuiBadge-badge": {
    backgroundColor: `${theme?.palette?.success.main}`,
    color: `${theme?.palette?.success.main}`,
    boxShadow: `0 0 0 2px ${theme?.palette?.background?.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const headerTitle = (pathName: any) => {
  let title;

  switch (pathName) {
    case SYSTEM_ADMIN?.DASHBOARD:
      title = "Dashboard";
      break;

    case SYSTEM_ADMIN?.COACHES:
      title = "Coaches";
      break;

    case SYSTEM_ADMIN?.COACHES_OVERVIEW:
      title = (
        <>
          <Typography component={"span"} variant={"h3"} color={"grey.500"}>
            Coach /
          </Typography>{" "}
          Overview
        </>
      );
      break;

    case SYSTEM_ADMIN?.CLIENTS:
      title = "Clients";
      break;

    case SYSTEM_ADMIN?.CLIENTS_OVERVIEW:
      title = (
        <>
          <Typography component={"span"} variant={"h3"} color={"grey.500"}>
            Client /
          </Typography>{" "}
          Overview
        </>
      );
      break;

    case SYSTEM_ADMIN?.FAQS:
      title = "FAQ's";
      break;

    case SYSTEM_ADMIN?.COMPLAINTS:
      title = "Complaints";
      break;

    case SYSTEM_ADMIN?.SETTINGS:
      title = "Settings";
      break;

    default:
      title = "Unknown Page";
      break;
  }
  return title;
};
