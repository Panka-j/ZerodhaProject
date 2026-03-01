import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 🔥 mobile toggle

  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsOpen(false); // close sidebar on mobile after click
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      {/* 🔥 Mobile Topbar */}
      <div className="mobile-topbar">
        <img src="/media/images/logo.png" alt="logo" />
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>

      {/* Sidebar / Menu */}
      <div className={`menu-container mt-2 ${isOpen ? "open" : ""}`}>
        <img
          src="/media/images/logo.png"
          style={{ width: "50px" }}
          alt="logo"
        />

        <div className="menus">
          <ul>
            <li>
              <Link to="/dashboard" onClick={() => handleMenuClick(0)}>
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                  Dashboard
                </p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/orders" onClick={() => handleMenuClick(1)}>
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                  Orders
                </p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/holdings" onClick={() => handleMenuClick(2)}>
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                  Holdings
                </p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/positions" onClick={() => handleMenuClick(3)}>
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                  Positions
                </p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/funds" onClick={() => handleMenuClick(4)}>
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                  Funds
                </p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/apps" onClick={() => handleMenuClick(6)}>
                <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                  Apps
                </p>
              </Link>
            </li>
          </ul>

          <hr />

          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">PP</div>
            <p className="username">USERID</p>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;