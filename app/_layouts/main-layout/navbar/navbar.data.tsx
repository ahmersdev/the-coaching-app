import { ClientsIcon, CoachesIcon, DashboardIcon } from "@/app/_assets";

export const mainRoutesArray = [
  { id: 1, icon: DashboardIcon, label: "Dashbaord", href: "/dashboard" },
  { id: 2, icon: CoachesIcon, label: "Coaches", href: "/coaches" },
  { id: 3, icon: ClientsIcon, label: "Clients", href: "/clients" },
];

export const bottomRoutesArray = [
  { id: 1, icon: DashboardIcon, label: "Settings", href: "/settings" },
  { id: 2, icon: DashboardIcon, label: "Sign Out", href: "/sign-in" },
];
