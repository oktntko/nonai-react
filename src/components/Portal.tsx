import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export function Portal({
  children,
  display,
  setDisplay,
  canCancel = true,
}: {
  children: JSX.Element;
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  canCancel?: boolean | "escape" | "outside";
}) {
  const element = document.getElementById("portal");
  if (!element) throw new Error("Not found modal element. Failed init.");

  const [animation, setAnimation] = useState(display ? "open" : "close");
  useEffect(() => setAnimation(display ? "open" : "close"), [display]);
  const hide = async () => {
    setAnimation("close");
    await new Promise((r) => setTimeout(r, 200));
    setDisplay(false);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (canCancel === true || canCancel === "outside") {
      hide();
    }
  };

  useEffect(() => {
    const escapeKeyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && (canCancel === true || canCancel === "escape")) {
        hide();
      }
    };
    document.addEventListener("keyup", escapeKeyHandler);
    return () => document.removeEventListener("keyup", escapeKeyHandler);
  });

  return ReactDOM.createPortal(
    display ? (
      <div
        className={`z-10
      flex items-center flex-col justify-center
      overflow-hidden
      fixed left-0 top-0 right-0 bottom-0
      ${animation === "open" ? "animate-appear" : "animate-disappear"}`}
      >
        {/* Background */}
        <div
          className="-z-10 bg-opacity-50 bg-slate-800 absolute left-0 top-0 right-0 bottom-0"
          onClick={(e) => handleOutsideClick(e)}
        />
        {/* Content */}
        <div
          className={`relative overflow-auto
          ${animation === "open" ? "animate-zoom" : "animate-zoomout"}`}
          onClick={(e) => e.preventDefault()}
        >
          {children}
        </div>
      </div>
    ) : (
      <></>
    ),
    element
  );
}
