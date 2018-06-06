// preprocessor.js
module.exports = {
	process(src) {
		return `
    const Handlebars = require('handlebars');
    module.exports = \`${src}\`;
    `;
	},
};
