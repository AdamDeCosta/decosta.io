import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Social from '../components/social'
import Avatar from '../images/undraw_hello_aeia.svg'

import '../components/index.scss';

const AvatarSize = "calc(150px + 15vmin)";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="header">
      <img 
        src={Avatar}
        style={{width: AvatarSize, height: AvatarSize}}
        alt="Person at computer waving."
      />
      <div className="header__about">
        <h3 className="header__about__bold">Hi! I'm Adam DeCosta!</h3>
        <div className="header__about__body">
          I'm a third year Computer Science & Innovation student at Champlain College.
          I am specializing in mobile development, and interested in web development,
          machine learning, and augmented reality.
        </div>
      </div>
      <Social />
    </section>
  </Layout>
)

export default IndexPage
