import React from "react";

function NavBar() {
  const links = ["#home", "#about", "#projects"];
  console.log(links);
  const navLinks = links.map((link) => {
    return <a key={link} href={link}>{link}</a>
  })
  return <nav>{navLinks}</nav>;
}

export default NavBar;
