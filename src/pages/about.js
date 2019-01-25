import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../components/about.scss'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="about" />
  </Layout>
)

export default AboutPage
