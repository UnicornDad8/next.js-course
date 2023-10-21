import React from "react";
import Link from "@/node_modules/next/link";

const Navbar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default Navbar;
