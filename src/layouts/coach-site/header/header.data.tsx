import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { COACH_SITE } from "@/constants/routes";
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
    case COACH_SITE?.DASHBOARD:
      title = "Dashboard";
      break;

    case COACH_SITE?.CLIENTS:
      title = "Clients";
      break;

    case COACH_SITE?.CLIENTS_OVERVIEW:
      title = (
        <>
          <Typography component={"span"} variant={"h3"} color={"grey.500"}>
            Client /
          </Typography>{" "}
          Overview
        </>
      );
      break;

    case COACH_SITE?.CLIENTS_ASSIGN_WORKOUT:
      title = (
        <>
          <Typography component={"span"} variant={"h3"} color={"grey.500"}>
            Client /
          </Typography>{" "}
          Assign
        </>
      );
      break;

    case COACH_SITE?.CLIENTS_ASSIGN_DIET:
      title = (
        <>
          <Typography component={"span"} variant={"h3"} color={"grey.500"}>
            Client /
          </Typography>{" "}
          Assign
        </>
      );
      break;

    case COACH_SITE?.CLIENTS_ASSIGN_MACRO_PLANS:
      title = (
        <>
          <Typography component={"span"} variant={"h3"} color={"grey.500"}>
            Client /
          </Typography>{" "}
          Assign
        </>
      );
      break;

    case COACH_SITE?.CLIENTS_ALERTS:
      title = "Client Alerts";
      break;

    case COACH_SITE?.CLIENTS_ALERTS_OVERVIEW:
      title = (
        <>
          <Typography component={"span"} variant={"h3"} color={"grey.500"}>
            Client Alerts /
          </Typography>{" "}
          Overview
        </>
      );
      break;

    case COACH_SITE?.CLIENTS_IMAGES:
      title = "Clients Progress";
      break;

    case COACH_SITE?.SETTINGS:
      title = "Settings";
      break;

    default:
      title = "Unknown Page";
      break;
  }
  return title;
};
