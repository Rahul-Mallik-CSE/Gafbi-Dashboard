/** @format */

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    const destination = savedRole === "admin" ? "/admin/users" : "/overview";

    router.replace(destination);
  }, [router]);

  return null;
}
