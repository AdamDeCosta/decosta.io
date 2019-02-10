import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../components/blog.scss'

const BlogPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`, `blog`]} />
      <div className="blog__posts">
        {postList.edges.map(({ node }, i) => (
          <Link to={node.fields.slug} className="link" >
            <div className="post-list">
              <h1>{node.frontmatter.title}</h1>
              <span>{node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
