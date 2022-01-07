import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import { rehypePlugin } from "@henrycatalinismith/11tyhype"
import { sassPlugin } from "@henrycatalinismith/11tysass"
import { reactPlugin } from "@henrycatalinismith/11tysnap"
import { EleventyCollection, EleventyLayout } from "@henrycatalinismith/11tytype"
import rehypeMinifyWhitespace from "rehype-minify-whitespace"
import rehypeUrls from "rehype-urls"

declare global {
  interface Home {
    title: string
    description: string
  }

  interface Note {
    name: string
    description: string
  }

  type Collections = {
    notes: EleventyCollection<Note>
  }

  type Layout<Template> = EleventyLayout<Template, Collections>
}

module.exports = function(eleventyConfig) {
  console.log("notebook")

  eleventyConfig.addCollection(
    "notes",
    function(collectionApi) {
      return collectionApi.getFilteredByGlob("notes/*.md")
    }
  )

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

