import { useState } from "react";
import { IconType } from "react-icons";
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
  const [showlarge, setShowLarge] = useState<Boolean>(false);

  return (
    <div
      className={
        "h-screen  bg-gray-900  fixed top-0 left-0 flex flex-col items-center justify-center " +
        `${showlarge ? " w-2" : " w-14"}`
      }
    >
      <_SideBarIcon icon={<FiHome size="20" />} tooltip="Dashboard" />
      <_SideBarIcon icon={<IoIosStats size="20" />} tooltip="Analytics" />
      <_SideBarIcon icon={<FiDollarSign size="20" />} tooltip="Revenue" />
      <_SideBarIcon icon={<FiUsers size="20" />} tooltip="Users" />
      <_SideBarIcon icon={<FiShoppingCart size="20" />} tooltip="Orders" />
      <_SideBarIcon icon={<AiFillShop size="20" />} tooltip="Products" />
      <_SideBarIcon icon={<FiSettings size="20" />} tooltip="Settings" />
    </div>
  );
};

type _SideBarIconProps = {
  icon: JSX.Element;
  tooltip: string;
};

const _SideBarIcon = ({ icon, tooltip }: _SideBarIconProps) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
  </div>
);
export default SideBar;
