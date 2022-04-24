import React, { ReactNode, useState } from "react";
import { AiFillDashboard, AiFillEdit } from "react-icons/ai";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";
import { FaCircle, FaFileInvoice, FaFileInvoiceDollar } from "react-icons/fa";
import { FcInvite, FcList } from "react-icons/fc";
import { HiOutlineDocumentAdd, HiUser, HiUsers } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp, IoIosHelpCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "~/assets/logo.png";

const iconOptions = { size: "1rem", color: "gray" };

function MenuItemLink({ to, label, icon }: { to: string; label: string; icon?: JSX.Element }) {
  const iconClone = React.cloneElement(icon ?? <FaCircle />, { ...iconOptions });

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => `flex items-center p-2 w-full text-base font-normal
        rounded-lg transition duration-75 group
          ${isActive ? "bg-blue-100 hover:bg-blue-200" : "hover:bg-gray-100"}
          dark:text-white dark:hover:bg-gray-700`}
      >
        {iconClone}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{label}</span>
      </NavLink>
    </li>
  );
}

function MenuItemDropdown({
  label,
  children,
  icon,
}: {
  label: string;
  children: ReactNode;
  icon?: JSX.Element;
}) {
  const iconClone = React.cloneElement(icon ?? <FaCircle />, { ...iconOptions });
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <button
        type="button"
        className={`flex items-center p-2 w-full text-base font-normal
         rounded-lg transition duration-75 group
          hover:bg-gray-100
          dark:text-white dark:hover:bg-gray-700`}
        aria-controls="dropdown"
        data-collapse-toggle="dropdown"
        onClick={() => setExpanded(!expanded)}
      >
        {iconClone}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{label}</span>
        {expanded ? <IoIosArrowUp {...iconOptions} /> : <IoIosArrowDown {...iconOptions} />}
      </button>
      <ul id="dropdown" className={`ml-4 py-2 space-y-1 ${expanded ? "" : "hidden"}`}>
        {children}
      </ul>
    </li>
  );
}

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <nav
      className={`flex flex-col flex-nowrap justify-between
        h-screen w-64 overflow-y-auto space-y-4
        bg-neutral-50
        transition-all duration-200`}
    >
      <header className="p-4 h-16 flex flex-row justify-between bg-neutral-100">
        <div className="flex items-center">
          <img src={logo} className="w-6 h-6" />
          <span className="ml-1 font-bold text-2xl text-gray-700">Nonai</span>
        </div>
        <div className="flex items-center">
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? <BiRadioCircleMarked size="1.5rem" /> : <BiRadioCircle size="1.5rem" />}
          </button>
        </div>
      </header>
      <main className="p-4 flex-grow space-y-4">
        <ul className="space-y-2">
          <MenuItemLink to="/" label="ダッシュボード" icon={<AiFillDashboard />} />
          <MenuItemDropdown label="請求書" icon={<FaFileInvoiceDollar />}>
            <MenuItemLink to="/invoices" label="一覧" icon={<FcList />} />
            <MenuItemLink to="/invoices/1000" label="詳細" icon={<FaFileInvoice />} />
            <MenuItemLink to="/invoices/1000/edit" label="編集" icon={<AiFillEdit />} />
            <MenuItemLink to="/invoices/add" label="追加" icon={<HiOutlineDocumentAdd />} />
          </MenuItemDropdown>
          <MenuItemDropdown label="ユーザ" icon={<HiUser />}>
            <MenuItemLink to="/users" label="一覧" icon={<HiUsers />} />
            <MenuItemLink to="/users/profile" label="プロフィール" icon={<ImProfile />} />
            <MenuItemLink to="/users/add" label="ユーザの招待" icon={<FcInvite />} />
          </MenuItemDropdown>
          <MenuItemLink to="/help" label="ヘルプ" icon={<IoIosHelpCircleOutline />} />
        </ul>
        <hr />
        <ul className="space-y-2">
          <MenuItemLink to="/landing" label="ランディング" />
        </ul>
      </main>
      <footer className="p-4 text-center">
        <span>Nonai © 2022</span>
      </footer>
    </nav>
  );
}
