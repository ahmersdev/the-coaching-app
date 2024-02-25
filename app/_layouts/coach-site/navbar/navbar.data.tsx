import {
  ClientsIcon,
  DashboardIcon,
  ClientAlertsIcon,
  ClientsImagesIcon,
} from "@/app/_assets/icons";

export const mainRoutesArray = [
  {
    id: 1,
    icon: DashboardIcon,
    label: "Dashboard",
    href: "/coach-dashboard",
  },
  { id: 2, icon: ClientsIcon, label: "Clients", href: "/coach-clients" },
  {
    id: 3,
    icon: ClientAlertsIcon,
    label: "Client Alerts",
    href: "/coach-alerts",
  },
  {
    id: 4,
    icon: ClientsImagesIcon,
    label: "Clients Images",
    href: "/coach-clients-images",
  },
];

export const mainStyles = (href: any, pathName: any, theme: any) => {
  return {
    background: `${
      pathName === href ? theme?.palette?.gradients?.primary : null
    }`,
    color: `${
      pathName === href
        ? theme?.palette?.grey?.[100]
        : theme?.palette?.secondary?.[400]
    }`,
    padding: { xs: "10px 8px", lg: "10px 16px" },
    fontSize: "16px",
    borderRadius: "6px 200px 200px 6px",
    "&:hover": {
      background: `${
        pathName === href
          ? theme?.palette?.gradients?.primary
          : theme?.palette?.gradients?.secondary
      }`,
    },
  };
};
