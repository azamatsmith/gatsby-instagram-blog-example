import React from 'react'
import GatsbyImage from 'gatsby-image'
import { graphql } from "gatsby"
import Layout from '../components/layout';

const InstaFeed = ({data}) => (

  <Layout>
    <div
        className="InstaFeed"
        style={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: 40,
          marginTop: 40,
        }}
      >
      {data.images.edges.map(({ node }) => (
        <div style={{ margin: 16 }} key={node.id}>
          <GatsbyImage resolutions={node.childImageSharp.resolutions} />
        </div>
      ))}
      </div>
  </Layout>
)







export const query = graphql`
  query MyInstaFeed {
    images: allFile(
      filter: { fields: { InstagramImage: { eq: "true" } } }
      sort: { fields: [fields___created], order: DESC }
    ) {
      edges {
        node {
          childImageSharp {
            resolutions(width: 250) {
              ...GatsbyImageSharpResolutions
            }
          }
          id
          fields {
            link
            caption
            likes
          }
        }
      }
    }
  }
`
export default InstaFeed