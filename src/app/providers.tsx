"use client";

import * as React from "react";
import { NavigationProvider } from "@/contexts/NavigationContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <NavigationProvider>{children}</NavigationProvider>;
}
