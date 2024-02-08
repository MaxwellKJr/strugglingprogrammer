import "./Layout.css";

import React, { ReactElement, ReactNode } from "react";

import NavBar from "../components/Navigation/NavBar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <NavBar />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
}
