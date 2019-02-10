import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'

import '../components/blog.scss'

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title, date } = post.frontmatter;

    return (
        <Layout>
            <div className="blog__post">
                <h1>{title}</h1>
                <span>{date}</span>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export default BlogPost;

export const query = graphql`

 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
        description
       }
   }
}`