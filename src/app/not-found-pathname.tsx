"use client";

import { usePathname } from "next/navigation";

export default function NotFoundPathname() {
  const pathname = usePathname();
  return <div>{pathname} NOT exists</div>;
}
