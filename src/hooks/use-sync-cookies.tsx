import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logOut, setGuardCheck } from "@/store/auth";

const useSyncCookiesWithState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const syncCookiesWithState = () => {
      const token = Cookies.get("authentication_token");
      const guardCheck = Cookies.get("guardCheck");

      if (!token) {
        dispatch(logOut());
      } else {
        return;
      }

      if (!guardCheck) {
        dispatch(setGuardCheck("true"));
      }
    };

    const intervalId = setInterval(syncCookiesWithState, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);
};

export default useSyncCookiesWithState;
