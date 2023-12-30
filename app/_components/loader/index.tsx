"use client";

import { GlobalStyles, useTheme } from "@mui/material";
import NProgress from "nprogress";
import { useEffect } from "react";

type PushStateInput = [
  data: unknown,
  unused: string,
  url?: string | URL | undefined
];

const Loader = () => {
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

  return (
    <GlobalStyles
      styles={{
        "#nprogress": {
          "& .bar": {
            top: 0,
            left: 0,
            height: 2,
            width: "100%",
            position: "fixed",
            zIndex: 9999,
            backgroundColor: theme?.palette?.primary?.main,
          },
        },
      }}
    />
  );
};

export default Loader;
