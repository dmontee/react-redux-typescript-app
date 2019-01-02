const postcssImport = require("postcss-import");
const postCssUrl = require("postcss-url")
const postcssReporter = require("postcss-reporter");
const postcssCssnext = require("postcss-cssnext");
const postcssNested = require("postcss-nested");
const postcssRemoveRoot = require("postcss-remove-root");
const postcssSimpleVars = require("postcss-simple-vars");
const stylelint = require("stylelint");
 
// Colors that will be shared across css files for consistency
const colors = {};

module.exports = {
    sourceMap: "inline",
    plugins: () => [
        postcssImport,
        stylelint(),
        postcssSimpleVars({ variables: colors }),
        postCssUrl({
            url: "copy"
        }),
        postcssReporter(),
        postcssCssnext({
            features: {
                autoprefixer: {
                    grid: false
                }
            }
        }),
        postcssNested,
        postcssRemoveRoot
    ]
}
 