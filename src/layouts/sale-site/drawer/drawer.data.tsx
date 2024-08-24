import { COACH_SITE, SYSTEM_ADMIN } from "@/constants/routes";
import { USER_ROLES } from "@/constants/strings";

export const getSaleSiteDrawerArray = (decryptedValues: any) => [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Services", href: "/services" },
  { id: 3, label: "About Us", href: "/about-us" },
  { id: 4, label: "Pricing", href: "/pricing" },
  { id: 5, label: "Contact Us", href: "/contact-us" },
  ...(decryptedValues
    ? [
        {
          id: 8,
          label: "Dashboard",
          href:
            decryptedValues.user_role === USER_ROLES.COACH
              ? COACH_SITE.DASHBOARD
              : SYSTEM_ADMIN.DASHBOARD,
        },
      ]
    : [
        { id: 6, label: "Sign In", href: "/sign-in" },
        { id: 7, label: "Sign Up", href: "/sign-up" },
      ]),
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
    padding: "10px 16px",
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
