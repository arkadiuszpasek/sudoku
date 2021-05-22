import React, { useRef } from "react";

interface Props extends React.PropsWithChildren<unknown> {
  onOutsideClick(): void;
}
export const OutsideMouseWrapper = ({ onOutsideClick, children }: Props) => {
  const ref = useRef<HTMLDivElement>();
  const setRef = (el: HTMLDivElement | null) => {
    if (el) {
      ref.current = el;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onOutsideClick();
    }
  };

  return (
    <div onClick={handleClick} ref={setRef}>
      {children}
    </div>
  );
};
