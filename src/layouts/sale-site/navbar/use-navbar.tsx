import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

export default function useNavbar() {
  const pathName = usePathname();
  const theme: any = useTheme();
  const [details, setDetails] = useState({
    user_role: "",
    coach_id: 0,
    gym_id: 0,
    gym_address: 0,
  });

  const detailsSelector = useAppSelector((state) => state.auth.details);

  useEffect(() => {
    if (detailsSelector) {
      setDetails(JSON.parse(detailsSelector));
    }
  }, [detailsSelector]);

  return { theme, pathName, details };
}
