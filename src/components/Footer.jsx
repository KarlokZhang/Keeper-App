import React from "react";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div>
      <footer className="footer">
        <p>Copyright ⓒ {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
