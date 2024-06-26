module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");

  eleventyConfig.addPassthroughCopy("*.ico");
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.bin");
};
