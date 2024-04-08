import { FunctionComponent, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTE_HOME, ROUTE_LOCAL_STORAGE_HANDLER } from "../App";

interface MenuRoute {
  path: string;
  label: string;
}

export const MenuComponent: FunctionComponent = () => {
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
        path: "",
        label: "EXERCISE #2",
      },
      {
        path: "TODO",
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
