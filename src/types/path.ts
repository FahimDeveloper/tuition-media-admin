import type { ReactNode } from "react";

export type TPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TPath[];
};
