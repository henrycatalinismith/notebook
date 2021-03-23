const fs = require("fs-extra")

fs.ensureDirSync("_data")
fs.ensureDirSync("_includes")

fs.writeFileSync(
  "_data/layout.js",
  'module.exports = "note"'
)

module.exports = function(eleventyConfig) {
  console.log("notebook")

  eleventyConfig.addLayoutAlias(
    "note",
    "../note.njk"
  )
}

