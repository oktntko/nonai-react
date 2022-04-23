import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "~/layouts/dashboard";
import { EmptyLayout } from "~/layouts/empty";
import { App } from "~/pages";
import { Workspace } from "~/pages/workspace";

export function AppRoute() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<App />} />
        <Route path="/work" element={<Workspace />} />
      </Route>
      <Route element={<EmptyLayout />}>
        <Route path="/empty" element={<Workspace />} />
      </Route>
    </Routes>
  );
}
