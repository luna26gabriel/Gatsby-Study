import { graphql, Link } from "gatsby";
import React from "react"
import Layout from "../components/Layout";
const styles = require("../styles/home.module.css");

export default function Home({ data }) {
const { title, description } = data.site.siteMetadata;
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based if Manchester</p>
          <Link className={styles.btn} to="/projects">My Portifolio Projects</Link>
        </div>
        <img src="/banner.png" alt="Site Banner" style={{ maxWidth: '100%' }}/>
        <p>{ title } - { description }</p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
