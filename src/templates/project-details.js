import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const style = require('../styles/project-details.module.css');

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  const featured = getImage(featuredImg.childImageSharp.gatsbyImageData)
  return (
    <Layout>
      <div className={style.details}>
        <h2>{ title }</h2>
        <h3>{ stack }</h3>
        <div className={style.featured}>
          <GatsbyImage image={ featured } alt={ title } />
        </div>
        <div className={style.html} dangerouslySetInnerHTML={{ __html: html }}  />*
      </div>
    </Layout>
  );
}

export const query = graphql`
query ProkectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}`