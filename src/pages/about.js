import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='About Us' showFooter={true}>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/lady.jpg"
      />
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;

export const Head = () => <Seo title="About" />