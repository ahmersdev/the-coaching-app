import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/store";
import { logOut } from "@/store/auth";
import { SALE_SITE } from "@/constants/routes";
import { useTheme } from "@mui/material";

export default function useDrawerNavbar() {
  const theme: any = useTheme();
  const pathName = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    router.push(SALE_SITE.HOME);
  };

  return { pathName, theme, handleLogout };
}
