module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
	css: {
		sourceMap: true
	},
	chainWebpack: config => {
		config.resolve.symlinks(true)
	}
}
