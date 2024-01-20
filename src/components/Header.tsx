import React from "react";

function Header() {
  return (
    <div className="text-black p-4 mb-6 flex justify-between">
      <p className="mx-2">My Tasks</p>
      <p className="mx-2">Shopping List</p>
      <p className="mx-2">+New List</p>
    </div>
  );
}

export default Header;
