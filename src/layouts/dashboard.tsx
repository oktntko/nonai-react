import { Outlet } from "react-router-dom";
import { Sidebar } from "~/components/Sidebar";

export function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar></Sidebar>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
