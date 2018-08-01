var path = require('path')

module.exports = {
	require: [
		path.resolve(__dirname, 'styleguide/setup.js')
	],
	components: 'src/components/**/[A-Z]*.js',
	styles: {
		StyleGuide: {
			'@global body': {
				fontFamily: 'Helvetica'
			}
		}
	}
}