import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "~/layouts/dashboard";
import { EmptyLayout } from "~/layouts/empty";
import { IndexPage } from "~/pages";
import { HelpPage } from "~/pages/help";
import { InvoicePage } from "~/pages/invoices";
import { LandingPage } from "~/pages/landing";
import { UsersPage } from "~/pages/users";

export function AppRoute() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="/invoices" element={<InvoicePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Route>
      <Route element={<EmptyLayout />}>
        <Route path="/landing" element={<LandingPage />} />
      </Route>
    </Routes>
  );
}
