/** Config file for Eleventy **/


const { execSync } = require("child_process");
  // execSync: Node function to execute terminal commands. blocking

const now = String(Date.now());

function runPostCSS() {
  execSync("postcss \"src/styles/main.css\" --dir \"docs/styles\"");
}

module.exports = function(eleventyConfig) {
  // things to do before running eleventy
  eleventyConfig.on('eleventy.before', runPostCSS);

  // Watch files outside the source directory, or not of the template formats
  eleventyConfig.addWatchTarget("./src/styles/")
  eleventyConfig.addWatchTarget("./tailwind.config.js")

  // Ingore these files
  const ignoreTheseFiles = [
  ];
  for(let file in ignoreTheseFiles) {
    eleventyConfig.ignore.add(file);
  }

  /** Copy these files/folders from `location A` to `location B`
   * Notice that the entries are key-value parse in an options object
   * { LocationA : Location B }
   */
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
    './images': './images',
    './assets': './assets',

  });

  // Add Shortcodes
  // global 'version' used for cachebusting
  eleventyConfig.addShortcode('version', () => now);

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "docs"
    },
    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
  }
};