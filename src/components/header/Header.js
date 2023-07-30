"use client";

import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { LuMail } from "react-icons/lu";
import { GiDiamondRing } from "react-icons/gi";
import { TbCheckupList } from "react-icons/tb";
import { VscNotebook } from "react-icons/vsc";
import { GoPeople } from "react-icons/go";
import { MdOutlineCalculate } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { useRouter } from 'next/navigation'

export default function Header() {
  return (
    <div>
      <div className="header-container w-full flex flex-col items-center">
        <div className="header-contact-bar px-12 w-full bg-white h-[36px] text-black flex items-center justify-end font-proxima text-lg">
          {" "}
          <span>
            <FiPhone />
          </span>
          &nbsp;Talk to our expert on{" "}
          <span className="font-semibold">&nbsp;+91-2034-0345</span>{" "}
        </div>
        <NavBar />
        <SubMenuBar />
      </div>
    </div>
  );
}

const NavBar = () => {
  // Further extension or removal of navabar menu items can be done by modifying the list
  const NavLinkData = [
    {
      id: 1,
      link_name: "planning tools",
      data: [],
    },
    {
      id: 2,
      link_name: "wedding venues",
      data: [],
    },
    {
      id: 3,
      link_name: "wedding vendors",
      data: [],
    },
    {
      id: 4,
      link_name: "blogs",
      data: [],
    },
  ];

  return (
    <div className="navabar-container h-[59px] w-full box-border bg-red-100 flex items-center justify-between px-12">
      <div className="navbar-brand">
        <a href="">
          <Image
            src={
              "https://www.weddingwire.in/assets/img/logos/gen_logoHeader.svg"
            }
            alt="brand-logo"
            width={200}
            height={200}
          />
        </a>
      </div>
      <div className="navbar-center-menu gap-2 md:gap-8 hidden md:flex">
        {NavLinkData.map((Item, index) => {
          return (
            <div className="menu-item-contianer" key={`nav-item-${index}`}>
              <div className="menu-link-text flex text-gray-700 font-semibold text-sm uppercase h-12 max-w-fit items-center box-border justify-center md:p-2 bg-cover bg-no-repeat bg-center " >
                {Item.link_name}
              </div>
            </div>
          );
        })}
      </div>

      <div className="navbar-profile-console flex items-center gap-4">
        <div className="navbar-profile-like hidden md:block">
          <button>
            <AiFillHeart color="#E25068" size={24} />
          </button>
        </div>
        <div className="navbar-profile-msg hidden md:block">
          <button>
            <LuMail color="#36393B" size={24} />
          </button>
        </div>
        <div className="navbar-profile-avatar w-8 h-8 flex items-center justify-center  rounded-full  bg-cover bg-no-repeat bg-center" style={ { backgroundImage: "url(https://images.unsplash.com/photo-1633104504240-30dd2e60a8fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80)" } }></div>
      </div>
    </div>
  );
};

const SubMenuBar = () => {
 
const router = useRouter()
  const handleClick = (e,path) => {
    e.preventDefault();
    router.push(path)
  }
  let icon_color = "#000000";
  let icon_size = 38;
  // Further extension or removal of navabar menu items can be done by modifying the list
  let SubMenuLinkData = [
    {
      id: 1,
      icon: <GiDiamondRing color={icon_color} size={icon_size} />,
      link_name: "my wedding",
      path:'my-wedding',
      data: [],
    },
    {
      id: 2,
      icon: <TbCheckupList color={icon_color} size={icon_size} />,
      link_name: "checklist",
      path: ':checklist',
      data: [],
    },
    {
      id: 3,
      icon: <VscNotebook color={icon_color} size={icon_size} />,
      link_name: "vending manager",
      path: ':vending-manager',
      data: [],
    },
    {
      id: 4,
      icon: <GoPeople color={icon_color} size={icon_size} />,
      link_name: "guest list",
      path: ':guest-list',
      data: [],
    },

    {
      id: 5,
      icon: <MdOutlineCalculate color={icon_color} size={icon_size} />,
      link_name: "buddget planner",
      path: ':budget-planner',
      data: [],
    },

    {
      id: 6,
      icon: <CgWebsite color={icon_color} size={icon_size} />,
      link_name: "wedding website",
      path: ':wedding-website',
      data: [],
    },
   
  ];

  return (
    <div className="submenu-bar-container h-28 w-full shadow-md bg-white flex items-center justify-between px-12 py-0 ">
      <div className="navbar-center-menu w-full flex justify-evenly">
        {SubMenuLinkData &&
          SubMenuLinkData.map((Item, index) => {
            return (
              <div
                className={`menu-item-contianer flex  h-28 border-0 items-center  hover:border-b-4 border-black `}
                key={`nav-item-${index}`}
                onClick={(e)=>handleClick(e,Item.path)}
              >
                <div className="item-wrapper max-w-fit max-h-fit ">
                  <div className="menu-item-icon flex justify-center items-center">
                    {Item.icon}
                  </div>
                  <div className="menu-link-text flex text-gray-700 text-sm capitalize h-12 max-w-fit items-center box-border justify-center p-2 hover:text-red-500 ">
                    {Item.link_name}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
