import React from 'react'
import GatsbyImage from 'gatsby-image'

export default class InstaFeed extends React.Component {
  _renderImages = () => {
    const { images } = this.props.data
    return images.edges.map(image => (
      <div style={{ margin: 16 }} key={image.node.id}>
        <GatsbyImage resolutions={image.node.childImageSharp.resolutions} />
      </div>
    ))
  }

  render() {
    return (
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
        {this._renderImages()}
      </div>
    )
  }
}

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
