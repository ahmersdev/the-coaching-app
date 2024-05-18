import { useTheme } from "@mui/material";
import NProgress from "nprogress";
import { useEffect } from "react";
import { PushStateInput } from "./loader.types";

export default function useLoader() {
  const theme: any = useTheme();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleAnchorClick = (event: MouseEvent): void => {
      const targetUrl = (event.currentTarget as HTMLAnchorElement).href;
      const currentUrl = window.location.href;
      if (targetUrl !== currentUrl) {
        NProgress.start();
      }
    };

    const handleMutation: MutationCallback = () => {
      const anchorElements: NodeListOf<HTMLAnchorElement> =
        document.querySelectorAll("a[href]");

      anchorElements.forEach((anchor) => {
        anchor.addEventListener("click", handleAnchorClick);
      });
    };

    const mutationObserver = new MutationObserver(handleMutation);

    mutationObserver.observe(document, { childList: true, subtree: true });

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray: PushStateInput) => {
        NProgress.done();
        target.apply(thisArg, argArray);
      },
    });
  });

  return { theme };
}
