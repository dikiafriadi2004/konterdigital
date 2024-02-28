"use client"

import React from "react";
import {
  LayoutDashboard,
  Library,
  LucideIcon,
  NotebookPen,
  Settings,
} from "lucide-react";
import SidebarItem from "./item";

interface ISidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Categories",
    path: "/categories",
    icon: Library,
  },
  {
    name: "Posts",
    path: "/posts",
    icon: NotebookPen,
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
    items: [
      {
        name: "General",
        path: "/general",
      },
      {
        name: "Privacy Policy",
        path: "/privacy-policy",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10">
        <img
          className="h-15 w-fit"
          src="/images/logo.png"
          alt="Konter Digital"
        />
        <div className="flex flex-col space-y-1">
            {items.map((item) => (
            <SidebarItem key={item.path} 
              item={item}
            />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
