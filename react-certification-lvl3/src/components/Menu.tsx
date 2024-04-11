import { FC, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ROUTE_GENERIC_DIALOG,
  ROUTE_HOME,
  ROUTE_LOCAL_STORAGE_HANDLER,
  ROUTE_USER_SEARCH,
} from "../App";

interface MenuRoute {
  path: string;
  label: string;
}

export const Menu: FC = () => {
  const routes: MenuRoute[] = useMemo(
    () => [
      {
        path: ROUTE_HOME,
        label: "Home page",
      },
      {
        path: ROUTE_LOCAL_STORAGE_HANDLER,
        label: "EXERCISE #1",
      },
      {
        path: ROUTE_GENERIC_DIALOG,
        label: "EXERCISE #2",
      },
      {
        path: ROUTE_USER_SEARCH,
        label: "EXERCISE #3",
      },
    ],
    []
  );

  const { pathname } = useLocation();
  return (
    <>
      <nav className="nav nav-pills nav-fill">
        {routes.map((route: MenuRoute) => (
          <Link
            key={route.path}
            className={`nav-item nav-link ${
              pathname === route.path ? "active" : ""
            }`}
            to={route.path}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <hr />
    </>
  );
};
