import { pxToRem } from "@/utils/get-font-value";

export const saleSiteFooterArray = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Services", href: "/services" },
  { id: 3, label: "About Us", href: "/about-us" },
  { id: 4, label: "Pricing", href: "/pricing" },
  { id: 5, label: "Contact Us", href: "/contact-us" },
];

export const listButtonStyles = (href: any, pathName: any) => {
  return {
    color: "grey.100",
    fontWeight: pathName === href ? 700 : 400,
    fontSize: pxToRem(20),
    background: "transparent",
    position: "relative",
    "&:hover": {
      background: "transparent",
    },
  };
};

export const activeLinkStyle = (theme: any) => {
  return {
    position: "absolute",
    bottom: pxToRem(10),
    left: "50%",
    transform: "translateX(-50%)",
    width: pxToRem(5),
    height: pxToRem(5),
    borderRadius: "50%",
    background: theme?.palette?.gradients?.primary,
  };
};
