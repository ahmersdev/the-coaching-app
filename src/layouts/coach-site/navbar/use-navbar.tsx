import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/store";
import { logOut } from "@/store/auth";
import { SALE_SITE } from "@/constants/routes";
import { useTheme } from "@mui/material";

export default function useNavbar() {
  const theme: any = useTheme();
  const pathName = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    setTimeout(() => {
      router.push(SALE_SITE.HOME);
    }, 100);
  };

  return { pathName, theme, handleLogout };
}
