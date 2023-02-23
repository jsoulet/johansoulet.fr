const siteUrl =  `https://johansoulet.fr`
const mapblogPostToAlgoliaRecord = ({id, frontmatter: {featuredImage, noIndex, ...frontmatter}, fields, rawBody, ...rest }) => {
  const imageURL = siteUrl + featuredImage.childImageSharp.gatsbyImageData.images.fallback.src
  const dateTimestamp = (new Date(frontmatter.date)).getTime()
  return {
    objectID: id,
    ...frontmatter,
    dateTimestamp,
    ...fields,
    imageURL,
    content: rawBody,
    ...rest
  }
}

module.exports = mapblogPostToAlgoliaRecord