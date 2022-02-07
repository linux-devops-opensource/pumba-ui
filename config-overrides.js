// DOCUMENTATION
// ERROR: Can't import the named export 'warning' from non EcmaScript module (only default export is available)
// https://github.com/formatjs/formatjs/issues/1395#issuecomment-992554891

module.exports = function override(webpackConfig) {
	webpackConfig.module.rules.push({
		test: /\.mjs$/,
		include: /node_modules/,
		type: 'javascript/auto'
	});

	return webpackConfig;
};
