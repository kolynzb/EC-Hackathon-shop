import { useState } from "react";
import { AiFillShop } from "react-icons/ai";
import {
  FiDollarSign,
  FiUsers,
  FiShoppingCart,
  FiSettings,
  FiHome,
} from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
const SideBar = () => {
  const [showlarge, setShowLarge] = useState(true);

  return (
    <div
      className={
        "h-screen  bg-black fixed top-0 left-0 flex flex-col items-center justify-center" +
        showlarge
          ? " w-2"
          : " w-20"
      }
    >
      <SideBarIcon icon={<FiHome size="20" />} tooltip="Dashboard" />
      <SideBarIcon icon={<IoIosStats size="20" />} tooltip="Analytics" />
      <SideBarIcon icon={<FiDollarSign size="20" />} tooltip="Revenue" />
      <SideBarIcon icon={<FiUsers size="20" />} tooltip="Users" />
      <SideBarIcon icon={<FiShoppingCart size="20" />} tooltip="Orders" />
      <SideBarIcon icon={<AiFillShop size="20" />} tooltip="Products" />
      <SideBarIcon icon={<FiSettings size="20" />} tooltip="Settings" />
    </div>
  );
};

const SideBarIcon = ({ icon, tooltip }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
  </div>
);
export default SideBar;
