import React, { ReactElement, ReactNode } from "react";
import NavBar from "../components/Navigation/NavBar";
import "./Layout.css";

interface LayoutProps {
  // title: string;
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
