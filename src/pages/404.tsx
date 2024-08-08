import { Link } from "gatsby";
import * as React from "react";
import Layout from "../layouts/index";

const NotFoundPage = () => {
  return (
    <Layout>
      <section id="wrong-page">
        <div className="container">
          <div className="wrong-page-details">
            <h1>
              Pepani (Sorry)<span> 😢</span>
            </h1>
            <p>It appears the page you clicked does not exist.</p>
            {process.env.NODE_ENV === "development" ? (
              <>
                <br />
                Try going back <Link to="/">Home</Link>.
                <br />
              </>
            ) : null}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
