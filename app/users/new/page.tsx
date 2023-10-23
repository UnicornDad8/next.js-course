"use client";
import React from "react";
import { useRouter } from "@/node_modules/next/navigation";

const NewUserPage = () => {
  const router = useRouter();

  return (
    <button className="btn btn-primary" onClick={() => router.push("/users")}>
      Create
    </button>
  );
};

export default NewUserPage;
