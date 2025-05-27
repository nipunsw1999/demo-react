import React from "react";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/demo-react/" },
    { name: "Contact", href: "/demo-react/contact/" },
  ];
  return (
    <div className="flex justify-between items-center p-4 bg-gray-400 text-white">
      <div>Logo</div>
      <div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name} className="inline-block mr-4">
              <a href={link.href} className="text-white hover:text-gray-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
