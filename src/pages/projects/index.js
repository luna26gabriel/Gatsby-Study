import React from 'react'
import Layout from '../../components/Layout'
const styles = require("../../styles/projects.module.css");

export default function Projects
() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Projects & WebSites I've Created</h3>
      </div>
    </Layout>
  )
}
