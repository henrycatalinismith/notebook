const fs = require("fs-extra")

fs.ensureDirSync("_data")
fs.ensureDirSync("_includes")

module.exports = function(eleventyConfig) {
  console.log("notebook")

  eleventyConfig.addGlobalData(
    "layout",
    function(e) {
      return "note"
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

  eleventyConfig.addLayoutAlias(
    "note",
    "../note.njk"
  )

  eleventyConfig.addWatchTarget("note.css")
}

