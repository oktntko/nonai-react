import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BiExtension } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

const iconOptions = { size: "1rem", color: "#414855" };

export function Header() {
  return (
    <header className="mx-auto flex h-full flex-wrap items-center justify-end pl-4 pr-12">
      <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
        <li>
          <button>
            <BiExtension {...iconOptions} />
          </button>
        </li>
        <li>
          <button>
            <VscColorMode {...iconOptions} />
          </button>
        </li>
        <li>
          <button>
            <AiOutlineBell {...iconOptions} />
          </button>
        </li>
        <li>
          <button>
            <FaUser {...iconOptions} />
          </button>
        </li>
      </ul>
    </header>
  );
}
