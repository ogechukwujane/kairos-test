"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/login");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <p>Loading...</p>
    </>
  );
}
