"use client";

import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
