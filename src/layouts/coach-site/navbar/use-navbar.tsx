import { usePathname, useRouter } from "next/navigation";
import { SALE_SITE } from "@/constants/routes";
import { useTheme } from "@mui/material";
import Cookies from "js-cookie";

export default function useNavbar() {
  const theme: any = useTheme();
  const pathName = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("authentication_token_coaching_app");
    router.push(SALE_SITE.HOME);
  };

  return { pathName, theme, handleLogout };
}
