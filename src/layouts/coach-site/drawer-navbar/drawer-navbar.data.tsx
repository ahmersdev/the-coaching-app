import {
  ClientsIcon,
  ClientAlertsIcon,
  DashboardIcon,
  SettingsIcon,
  ClientsImagesIcon,
} from "@/assets/icons";

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
    href: "/coach-client-images",
  },
  { id: 5, icon: SettingsIcon, label: "Settings", href: "/coach-settings" },
];

export const mainStyles = (href: any, pathName: any, theme: any) => {
  return {
    background: `${
      pathName?.includes(href) ? theme?.palette?.gradients?.primary : null
    }`,
    color: `${
      pathName?.includes(href)
        ? theme?.palette?.grey?.[100]
        : theme?.palette?.secondary?.[400]
    }`,
    padding: "10px 16px",
    fontSize: "16px",
    borderRadius: "6px 200px 200px 6px",
    "&:hover": {
      background: `${
        pathName?.includes(href)
          ? theme?.palette?.gradients?.primary
          : theme?.palette?.gradients?.secondary
      }`,
    },
  };
};
