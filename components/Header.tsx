import React from "react";

export interface IHeaderProps {}

const Header = ({}: IHeaderProps) => {
  return (
    <>
      <div className="absolute top-0 left-0 z-[999]">Header</div>
      <div className="pt-10" />
    </>
  );
};

export default Header;
