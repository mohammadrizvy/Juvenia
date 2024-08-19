import React from "react";
import { useLocation, Link } from "react-router-dom";
import { LuHome, LuFolderInput, LuFileText, LuUser, LuSettings, LuFolderPlus, LuTag } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";

// Define a mapping of paths to custom breadcrumb names and icons
const breadcrumbConfig = [
  {
    path: /^\/mensCollection$/,
    name: "Men's Collection",
    icon: <LuFolderInput />
  },
  {
    path: /^\/womensCollection$/,
    name: "Women's Collection",
    icon: <LuFolderInput />
  },
  {
    path: /^\/product-details\/[^/]+$/, // Matches /product-details/:id
    name: "Product Details",
    icon: <LuFileText />
  },
  {
    path: /^\/check-out$/,
    name: "Check Out",
    icon: <LuFileText />
  },
  {
    path: /^\/profile$/,
    name: "Profile",
    icon: <LuUser />
  },
  {
    path: /^\/profile\/orders$/,
    name: "Orders",
    icon: <LuFileText />
  },
  {
    path: /^\/profile\/payment-history$/,
    name: "Payment History",
    icon: <LuFileText />
  },
  {
    path: /^\/dashboard$/,
    name: "Dashboard",
    icon: <RxDashboard></RxDashboard>
  },
  {
    path: /^\/dashboard\/manage-items$/,
    name: "Manage Items",
    icon: <LuFolderPlus />
  },
  {
    path: /^\/dashboard\/add-items$/,
    name: "Add Items",
    icon: <LuFolderPlus />
  },
  {
    path: /^\/dashboard\/all-users$/,
    name: "All Users",
    icon: <LuUser />
  },
  {
    path: /^\/discount$/,
    name: "Discount",
    icon: <LuTag />
  },
  {
    path: /^\/login$/,
    name: "Login",
    icon: <LuUser />
  }
];

// Function to get breadcrumb config based on path
const getBreadcrumbConfig = (path) => {
  const breadcrumb = breadcrumbConfig.find((bc) => bc.path.test(path));
  return breadcrumb || { name: path.split('/').pop(), icon: <LuFolderInput /> };
};

const BreadcrumbComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Check if the current path is under /dashboard
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  // Prepare breadcrumbs array
  const breadcrumbs = isDashboardRoute
    ? [
        { to: "/dashboard", name: "Dashboard", icon: <RxDashboard></RxDashboard> },
        ...pathnames.slice(1).map((value, index) => {
          const to = `/dashboard/${pathnames.slice(1, index + 2).join("/")}`;
          const { name, icon } = getBreadcrumbConfig(to);
          return { to, name, icon };
        })
      ]
    : [
        { to: "/", name: "Home", icon: <LuHome /> },
        ...pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const { name, icon } = getBreadcrumbConfig(to);
          return { to, name, icon };
        })
      ];

  return (
    <div className="breadcrumbs pl-4 mt-4 mb-4 text-sm">
      <ul className="text-sm">
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={breadcrumb.to}>
              {isLast ? (
                <span className="flex items-center gap-2">
                  {breadcrumb.icon}
                  {breadcrumb.name}
                </span>
              ) : (
                <Link className="flex items-center gap-2" to={breadcrumb.to}>
                  {breadcrumb.icon}
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadcrumbComponent;
