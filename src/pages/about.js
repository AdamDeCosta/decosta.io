import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

import '../components/about.scss'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="about">
      <div className="about__container">
        <div className="about__image">
          <Image />
        </div>
        Hey, I'm Adam DeCosta. I'm a third year Computer Science & Innovation
        major studying at Champlain College. I have a specialization in 
        Mobile Development and a minor in Math. I love web development, and am 
        interested in machine learning and augmented reality.
      </div>
    </section>
  </Layout>
)

export default AboutPage
