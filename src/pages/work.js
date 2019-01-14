import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Social from '../components/social'


import '../components/work.scss'

const WorkPage = () => (
    <Layout>
        <SEO title="Work" />
        <section className="work">

            <Social />
        </section>
    </Layout>
)

export default WorkPage

