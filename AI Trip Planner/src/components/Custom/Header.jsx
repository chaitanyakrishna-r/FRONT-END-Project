import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="flex justify-between p-3 px-5 items-center">
      <img src="/logo.svg" alt="company-logo" />
      <div>
        <Button>Sign in </Button>
      </div>
    </div>
  );
}

export default Header;
