import { useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logOut, logIn } from "@/store/auth";

const useSyncCookiesWithState = () => {
  const dispatch = useDispatch();

  const syncCookiesWithState = useCallback(() => {
    const token = Cookies.get("authentication_token");

    if (!token) {
      dispatch(logOut());
    } else {
      dispatch(logIn(token)); // Update the Redux state with the token
    }
  }, [dispatch]);

  useEffect(() => {
    syncCookiesWithState(); // Initial check

    const intervalId = setInterval(syncCookiesWithState, 5000); // Reduced frequency

    return () => clearInterval(intervalId);
  }, [syncCookiesWithState]);
};

export default useSyncCookiesWithState;
