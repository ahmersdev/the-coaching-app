import { SALE_SITE } from "@/constants/routes";

export const headerTitle = (pathName: any) => {
  let title;

  switch (pathName) {
    case SALE_SITE?.SERVICES:
      title = "Services";
      break;

    case SALE_SITE?.ABOUT_US:
      title = "About Us";
      break;

    case SALE_SITE?.PRICING:
      title = "Pricing";
      break;

    case SALE_SITE?.CONTACT_US:
      title = "Contact Us";
      break;

    default:
      title = "Home";
      break;
  }
  return title;
};
