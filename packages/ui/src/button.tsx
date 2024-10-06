"use client";

import { ReactNode } from "react";
import { baseClass } from "@repo/ui/uitil/cn";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`path alias value is rendered as: ${baseClass}!`)}
    >
      {children}
    </button>
  );
};
