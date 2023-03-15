import { graphql, Link } from "gatsby";
import React from "react"
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const styles = require("../styles/home.module.css");


export default function Home({ data }) {
  const banner = getImage(data.file)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based if Manchester</p>
          <Link className={styles.btn} to="/projects">My Portifolio Projects</Link>
        </div>
        <GatsbyImage image={ banner } alt="image" />
      </section>
    </Layout>
  );
}

export const query = graphql`
query BannerImage {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
}`;