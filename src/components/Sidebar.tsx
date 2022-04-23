import { useState } from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "~/components/logo.png";

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <aside className="flex flex-col flex-nowrap justify-between bg-slate-50 text-gray-500 h-screen w-64 p-4 transition-all duration-200 overflow-y-auto">
        <header className="flex flex-row justify-between my-3">
          <div className="flex items-center">
            <img src={logo} className="w-8 h-8" />
            <span className="font-bold text-gray-700">Nonai</span>
          </div>
          <div>
            <button onClick={() => setExpanded(!expanded)}>
              {expanded ? <BsArrowBarLeft size="2rem" /> : <BsArrowBarRight size="2rem" />}
            </button>
          </div>
        </header>
        <main className="flex-grow my-3">
          <aside className="w-64" aria-label="Sidebar">
            <div className="px-3 py-4 rounded">
              <ul>
                <li>
                  <Link to="/">Dashborads</Link>
                </li>
                <li>
                  <Link to="/work">Workspace</Link>
                </li>
              </ul>
            </div>
            <hr />
            <div className="px-3 py-4 rounded">
              <ul>
                <li>
                  <Link to="/empty">Empty</Link>
                </li>
              </ul>
            </div>
          </aside>
        </main>
        <footer className="my-3 text-center">
          <span>Nonai © 2022</span>
        </footer>
      </aside>
    </div>
  );
}
