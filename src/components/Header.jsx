import React from "react";
import HighlightOutlinedIcon from "@material-ui/icons/HighlightOutlined";

function Header() {
  return (
    <div>
      <header className="header">
        <h1>
          <HighlightOutlinedIcon />
          Keeper
        </h1>
      </header>
    </div>
  );
}

export default Header;
