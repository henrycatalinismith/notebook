const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const { rehypePlugin } = require("@hendotcat/11tyhype")
const { sassPlugin } = require("@hendotcat/11tysass")
const rehypeMinifyWhitespace = require("rehype-minify-whitespace")
const fs = require("fs-extra")

fs.ensureDirSync("_data")
fs.ensureDirSync("_includes")

module.exports = function(eleventyConfig) {
  console.log("notebook")

  eleventyConfig.addFilter(
    "iso8601",
    function(d) {
      const date = new Date(d)
      return [
        date.getFullYear(),
        "-",
        (date.getMonth() + 1).toString().padStart(2, "0"),
        "-",
        date.getDate(),
      ].join("")
    }
  )

  eleventyConfig.addPassthroughCopy("notebook.svg")
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPlugin(rehypePlugin, {
    plugins: [
      [rehypeMinifyWhitespace],
    ]
  })

  eleventyConfig.addPlugin(sassPlugin, {
    files: [{
      alias: "css",
      file: "style.scss",
      outputStyle: "compressed",
    }],
  })

  eleventyConfig.addWatchTarget("style.scss")
}

