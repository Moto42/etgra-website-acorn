/** Config file for Eleventy **/


const { execSync } = require("child_process");
  // execSync: Node function to execute terminal commands. blocking

const now = String(Date.now());

function runPostCSS() {
  execSync("postcss \"src/styles/main.css\" --dir \"_site/styles\"");
}

// Transforms are functions used to modify a templates output.
function transform_no_change(content, outputPath) {
  return content; // no change done.
  // This is for an example
}
function transform_remove_prefixed_whitespace(content, outputPath) {
  function getIndex(txt) {
    for(let i in txt) {
      if(!/[\s\n]/.test(txt[i])) return i;
    }
  }
  const firstNonWhiteSpaceChar = getIndex(content);
  return content.substring(firstNonWhiteSpaceChar);
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

  // Add Transforms, see https://www.11ty.dev/docs/config/#transforms
  eleventyConfig.addTransform("remove-prefixed-whitespace", transform_remove_prefixed_whitespace);

  // Add Shortcodes
  // global 'version' used for cachebusting
  eleventyConfig.addShortcode('version', () => now);
  eleventyConfig.addShortcode('lastRevisionTime', () => `${new Date().toLocaleTimeString('en-US',{timeStyle:'short'})} ${new Date().toLocaleDateString('en-US')}`);

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
  }
};