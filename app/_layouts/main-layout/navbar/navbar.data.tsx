import { ClientsIcon, CoachesIcon, DashboardIcon } from "@/app/_assets";

export const mainRoutesArray = [
  { id: 1, icon: DashboardIcon, label: "Dashbaord", href: "/dashboard" },
  { id: 2, icon: CoachesIcon, label: "Coaches", href: "/coaches" },
  { id: 3, icon: ClientsIcon, label: "Clients", href: "/clients" },
];

export const mainStyles = (href: any, pathName: any, theme: any) => {
  return {
    background: `${
      href === pathName ? theme?.palette?.gradients?.primary : null
    }`,
    color: `${
      href === pathName
        ? theme?.palette?.grey?.[100]
        : theme?.palette?.secondary?.[400]
    }`,
    padding: "10px 16px",
    fontSize: "16px",
    borderRadius: "6px 200px 200px 6px",
    "&:hover": {
      background: `${
        href === pathName
          ? theme?.palette?.gradients?.primary
          : theme?.palette?.gradients?.secondary
      }`,
    },
  };
};
