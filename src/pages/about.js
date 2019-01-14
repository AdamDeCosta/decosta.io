import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Social from '../components/social'

import '../components/about.scss'

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <section className="about">
            
            <Social />
        </section>
    </Layout>
)

export default AboutPage