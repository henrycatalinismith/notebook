import { rehypePlugin } from "@henrycatalinismith/11tyhype"
import rehypeMinifyWhitespace from "rehype-minify-whitespace"

module.exports = function(eleventyConfig) {
  console.log("notebook")

  eleventyConfig.addCollection(
    "notes",
    function(collectionApi) {
      return collectionApi.getFilteredByGlob("notes/*.md")
    }
  )

  eleventyConfig.addPassthroughCopy("notebook.svg")

  const siteUrl = process.env.CI ? "https://hen.cat/notebook/" : ""

  eleventyConfig.addPlugin(rehypePlugin, {
    plugins: [
      [rehypeMinifyWhitespace],
    ]
  })

  const dir = {
    includes: "_includes",
    layouts: "_layouts",
  }

  return {
    dir,
  }
}

