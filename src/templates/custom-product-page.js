import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  price,
}) => (
  <div>
      <span>{image}</span>
      <span>{title}</span>
      <span>{heading}</span>
      <span>{description}</span>
      <span>USD: {price}</span>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
}

const customProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        price={frontmatter.price}
      />
    </Layout>
  )
}

customProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default customProductPage

export const productPageQuery = graphql`
query CustomProductPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        description
        heading
        price
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  
`
