import { ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export interface IAssetsProps {
  fill?: string;
  stroke?: string;
}

export interface INotistackVariants {
  SUCCESS: "success";
  ERROR: "error";
  WARNING: "warning";
  INFO: "info";
}
