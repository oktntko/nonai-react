import React from "react";
import ReactDOM from "react-dom/client";

let modal: ReactDOM.Root | null;
let escapeKeyHandler: ((evt: Event) => void) | null;

export const init = (element: HTMLElement | null) => {
  if (!element) throw new Error("Not found modal element. Failed init.");
  modal = ReactDOM.createRoot(element);
};

export const open = ({
  children,
  canCancel = true,
}: {
  children: JSX.Element;
  canCancel?: boolean | "escape" | "outside";
}) => {
  if (!modal) throw new Error("Not found ReactModal. Failed open.");

  escapeKeyHandler = () => {
    if (canCancel === true || canCancel === "escape") close();
  };
  document.addEventListener("keyup", escapeKeyHandler);

  const handleOutsideClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (canCancel === true || canCancel === "outside") close();
  };

  modal.render(
    <div
      className={`z-10
        flex items-center flex-col justify-center
        overflow-hidden
        fixed left-0 top-0 right-0 bottom-0
        animate-appear`}
    >
      {/* Modal Background */}
      <div
        className="-z-10 bg-opacity-50 bg-slate-800 absolute left-0 top-0 right-0 bottom-0"
        onClick={(e) => handleOutsideClick(e)}
      />
      {/* Modal Content */}
      <div
        className={`relative overflow-auto animate-appear animate-zoom`}
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </div>
    </div>
  );
};

export const close = () => {
  if (!modal) throw new Error("Not found ReactModal. Failed close.");

  if (escapeKeyHandler) {
    document.removeEventListener("keyup", escapeKeyHandler);
    escapeKeyHandler = null;
  }
  modal.render(<></>);
};
