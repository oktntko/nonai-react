import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";

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

  const handleOutsideClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (canCancel === true || canCancel === "outside") {
      setDisplay(false);
    }
  };

  useEffect(() => {
    const escapeKeyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && (canCancel === true || canCancel === "escape")) {
        setDisplay(false);
      }
    };
    document.addEventListener("keyup", escapeKeyHandler);
    return () => document.removeEventListener("keyup", escapeKeyHandler);
  });

  const refPortal = useRef(null);
  return ReactDOM.createPortal(
    <Transition nodeRef={refPortal} in={display} timeout={200} unmountOnExit>
      <div
        ref={refPortal}
        className={`z-10
          flex items-center flex-col justify-center
          overflow-hidden
          fixed left-0 top-0 right-0 bottom-0
          bg-opacity-50 bg-slate-800
          ${display ? "animate-appear" : "animate-disappear"}`}
        onClick={(e) => handleOutsideClick(e)}
      >
        <div
          className={`relative overflow-auto
            ${display ? "animate-zoom" : "animate-zoomout"}`}
          onClick={(e) => e.preventDefault()}
        >
          {children}
        </div>
      </div>
    </Transition>,
    element
  );
}
