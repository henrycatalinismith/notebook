module.exports = {
  layout: "note",
  eleventyComputed: {
    permalink: data => {
      return `/${data.page.fileSlug}/index.html`
    },
  },
}

