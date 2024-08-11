import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logOut } from "@/store/auth";

const useSyncCookiesWithState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const syncCookiesWithState = () => {
      const token = Cookies.get("authentication_token");

      if (!token) {
        dispatch(logOut());
      } else {
        return;
      }
    };

    const intervalId = setInterval(syncCookiesWithState, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);
};

export default useSyncCookiesWithState;
