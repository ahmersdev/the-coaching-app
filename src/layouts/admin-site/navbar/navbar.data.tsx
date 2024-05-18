import {
  ClientsIcon,
  CoachesIcon,
  ComplaintsIcon,
  DashboardIcon,
  FaqsIcon,
} from "@/assets/icons";

export const mainRoutesArray = [
  { id: 1, icon: DashboardIcon, label: "Dashboard", href: "/admin-dashboard" },
  { id: 2, icon: CoachesIcon, label: "Coaches", href: "/admin-coaches" },
  { id: 3, icon: ClientsIcon, label: "Clients", href: "/admin-clients" },
  { id: 4, icon: FaqsIcon, label: "FAQ's", href: "/admin-faqs" },
  {
    id: 5,
    icon: ComplaintsIcon,
    label: "Complaints",
    href: "/admin-complaints",
  },
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
    padding: { xs: "10px 8px", lg: "10px 16px" },
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
