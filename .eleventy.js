const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const { rehypePlugin } = require("@hendotcat/11tyhype")
const { sassPlugin } = require("@hendotcat/11tysass")
const { reactPlugin } = require("@hendotcat/11tysnap")
const { register } = require("esbuild-register/dist/node")
const rehypeMinifyWhitespace = require("rehype-minify-whitespace")
const rehypeUrls = require("rehype-urls")
const fs = require("fs-extra")

register()

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

  const siteUrl = process.env.CI ? "https://hen.cat/notebook/" : ""

  eleventyConfig.addPlugin(sassPlugin, {
    files: [{
      file: "style.scss",
      outFile: "style.[hash].css",
      outputStyle: "compressed",
    }],
    plugins: [
      // css => postcss([autoprefixer]).process(css).css,
      // css => { throw new Error("lol") },
    ],
    verbose: true,
  })

  eleventyConfig.addPlugin(reactPlugin, {
    verbose: true,
  })

  eleventyConfig.addPlugin(rehypePlugin, {
    plugins: [
      [rehypeMinifyWhitespace],
      [rehypeUrls, url => {
        if (url.href.startsWith("/")) {
          return `${siteUrl}${url.href}`
        }
      }],
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

