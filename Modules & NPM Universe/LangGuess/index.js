const franc = require('franc');
const langs = require('langs');

const input = process.argv[2];

const language = langs.where("3", franc(input));
console.log(language);
console.log(language.name);