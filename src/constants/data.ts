import { AppNavItem } from "@/types";

export const authUser = {
  username: "admin",
  password: "qwer",
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const appNavItems: AppNavItem[] = [
  {
    section: "Dashboard",
    navItems: [
      {
        title: "Dashboard",
        url: "/dashboard/overview",
        icon: "dashboard",
        isActive: true,
        shortcut: ["d", "d"],
        items: [], // Empty array as there are no child items for Dashboard
      },
    ],
  },
  {
    section: "Reporting",
    navItems: [
      {
        title: "Transaction Report",
        url: "#", // Placeholder as there is no direct link for the parent
        icon: "lockCog",
        isActive: true,
        items: [],
      },
    ],
  },
  {
    section: "Settings",
    navItems: [
      {
        title: "System Setup",
        url: "#", // Placeholder as there is no direct link for the parent
        icon: "lockCog",
        isActive: true,

        items: [
          {
            title: "Permission",
            url: "/dashboard/permission",
            icon: "userPen",
            shortcut: ["p", "p"],
          },
          {
            title: "Role",
            shortcut: ["r", "r"],
            url: "/dashboard/role",
            icon: "user2",
          },
          {
            title: "User",
            shortcut: ["u", "u"],
            url: "/dashboard/user",
            icon: "user",
          },
        ],
      },
    ],
  },
];
