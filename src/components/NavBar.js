import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const navlinks = links.map((link) => {
  return <a key={link} href={"#"+link}>{link}</a>
})
  return <nav>{/* display an <a> tag for each link here */}
  {navlinks};
  </nav>;
}

export default NavBar;
