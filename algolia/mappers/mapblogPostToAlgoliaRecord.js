const siteUrl =  `https://johansoulet.fr`
const mapblogPostToAlgoliaRecord = ({id, frontmatter: {featuredImage, noIndex, ...frontmatter}, fields, rawBody, ...rest }) => {
  const imageURL = siteUrl + featuredImage.childImageSharp.original.src
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    imageURL,
    content: rawBody,
    ...rest
  }
}

module.exports = mapblogPostToAlgoliaRecord