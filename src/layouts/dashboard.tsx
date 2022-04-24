import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "~/components/Sidebar";
import { Header } from "~/components/Header";

export function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden text-gray-800 dark:text-white">
      <nav className="flex-shrink-0 shadow-2xl z-50">
        <Sidebar />
      </nav>
      <div
        className="flex-grow
        flex flex-col flex-nowrap
        bg-neutral-50"
      >
        <nav className="flex-shrink-0 h-16">
          <Header />
        </nav>
        <main className="flex-grow overflow-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
