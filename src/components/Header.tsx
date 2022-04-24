import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BiExtension } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

const iconOptions = { size: "1rem", color: "#414855" };

export function Header() {
  return (
    <header className="h-full pl-4 pr-12 flex flex-wrap justify-end items-center mx-auto">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
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
