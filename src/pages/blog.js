import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Social from '../components/social'

import '../components/blog.scss'

const BlogPage = () => (
    <Layout>
        <SEO title = "Blog" />
        <section className="blog">

            <Social />
        </section>
    </Layout>
)

export default BlogPage