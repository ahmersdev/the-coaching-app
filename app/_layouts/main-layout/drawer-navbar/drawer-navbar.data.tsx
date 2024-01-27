import {
  ClientsIcon,
  CoachesIcon,
  ComplaintsIcon,
  DashboardIcon,
  FaqsIcon,
  SettingsIcon,
} from "@/app/_assets/icons";

export const mainRoutesArray = [
  { id: 1, icon: DashboardIcon, label: "Dashboard", href: "/dashboard" },
  { id: 2, icon: CoachesIcon, label: "Coaches", href: "/coaches" },
  { id: 3, icon: ClientsIcon, label: "Clients", href: "/clients" },
  { id: 4, icon: FaqsIcon, label: "FAQ's", href: "/faqs" },
  { id: 5, icon: ComplaintsIcon, label: "Complaints", href: "/complaints" },
  { id: 6, icon: SettingsIcon, label: "Settings", href: "/settings" },
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
