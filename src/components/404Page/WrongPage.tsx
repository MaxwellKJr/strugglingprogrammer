import "./WrongPage.css";

import { Link } from "gatsby";
import React from "react";

const WrongPage = () => {
  return (
    <div className="container">
      <h1>Page not found. The sadness!😔</h1>
      <p>
        Sorry, we couldn&apos;t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try going back <Link to="/">Home</Link>.
            <br />
          </>
        ) : null}
        <br />
      </p>
    </div>
  );
};

export default WrongPage;
