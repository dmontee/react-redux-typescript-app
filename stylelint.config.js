const path = require('path');

module.exports = {
    "ignoreFiles": [
        "./styles/vendors.css"
    ],
    "extends": "stylelint-config-standard",
    "rules": {
        "no-eol-whitespace": null,
        "color-no-invalid-hex": true,
        "indentation": ["tab", {
            "except": ["value"]
        }],
        "declaration-colon-space-after": "always",
        "max-empty-lines": 2,
        "rule-empty-line-before": ["always", {
            "except": ["first-nested"],
            "ignore": ["after-comment"]
        }],
        "declaration-property-unit-blacklist": {
            "font-size": ["px"]
        }
    }
}
