const fs = require("fs")
const { DateTime } = require("luxon")

module.exports = function(eleventyConfig) {
 const dir = fs.opendirSync("./")
 let dirent = dir.readSync();
 while (dirent) {
  if (!dirent.isDirectory()) {
   dirent = dir.readSync();
   continue
  }

  const matches = dirent.name.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})-([a-z0-9-]+)$/)
  if (!matches) {
   dirent = dir.readSync();
   continue
  }

  const [,,,, slug] = matches
  eleventyConfig.addPassthroughCopy({
   [`${dirent.name}/*.gif`]: slug,
   [`${dirent.name}/*.jpg`]: slug,
   [`${dirent.name}/*.mp4`]: slug,
   [`${dirent.name}/*.png`]: slug,
  });

  dirent = dir.readSync();
 }

 eleventyConfig.addFilter(
  "ymd", (date) => {
   return DateTime.fromJSDate(date).toISODate()
 })
}