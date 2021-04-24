const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const sass = require("@hendotcat/11tysass")
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

  eleventyConfig.addPlugin(sass, {
    files: [{
      alias: "css",
      file: "style.scss",
    }],
  })

  eleventyConfig.addWatchTarget("style.scss")
}

