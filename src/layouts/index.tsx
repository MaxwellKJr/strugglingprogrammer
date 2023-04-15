import React from "react";
import { PageProps } from "gatsby";
import NavBar from "../components/Navigation/NavBar";
import "./Layout.css";

export default function Layout({ children }: PageProps) {
  return (
    <>
      <NavBar />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
}
