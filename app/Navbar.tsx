"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Link from "@/node_modules/next/link";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === "loading" && (
        <span className="loading loading-dots loading-md"></span>
      )}
      {status === "authenticated" && <div>{session.user!.name}</div>}
      {status === "unauthtencticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
