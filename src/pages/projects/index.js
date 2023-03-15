import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../../components/Layout'
const styles = require("../../styles/projects.module.css");

export default function Projects({ data }) {
  console.log(data);
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;  
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Projects & WebSites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug } key={ project.id }>
              <div>
                <GatsbyImage image={ project.frontmatter.thumb.childImageSharp.gatsbyImageData } alt={project.frontmatter.title} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Link what you see? Contact me at { contact } for more</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}`;