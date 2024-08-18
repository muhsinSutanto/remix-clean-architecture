import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function HydrateFallback() {
  return (
    <>
      <p>Loading...</p>
      <Scripts />
    </>
  );
}

export default function Component() {
  return (
    <>
      <Outlet />
      <Scripts />
    </>
  );
}
