import Bem from 'better-event-manager'
const color = [
	[0, '#003DDF'],
	[0.003, '#003FDF'],
	[0.006, '#0041DE'],
	[0.009, '#0043DE'],
	[0.013, '#0044DD'],
	[0.016, '#0046DD'],
	[0.019, '#0048DC'],
	[0.022, '#004ADC'],
	[0.025, '#004BDB'],
	[0.028, '#004DDB'],
	[0.031, '#004FDA'],
	[0.034, '#0051DA'],
	[0.038, '#0052D9'],
	[0.041, '#0054D9'],
	[0.044, '#0056D8'],
	[0.047, '#0058D8'],
	[0.05, '#0059D7'],
	[0.053, '#005BD7'],
	[0.056, '#005DD6'],
	[0.06, '#005FD6'],
	[0.063, '#0060D5'],
	[0.066, '#0062D5'],
	[0.069, '#0064D4'],
	[0.072, '#0066D4'],
	[0.075, '#0067D3'],
	[0.078, '#0069D3'],
	[0.082, '#006BD2'],
	[0.085, '#006DD2'],
	[0.088, '#006ED1'],
	[0.091, '#0070D1'],
	[0.094, '#0072D0'],
	[0.097, '#0074D0'],
	[0.1, '#0075CF'],
	[0.103, '#0077CF'],
	[0.107, '#0079CE'],
	[0.11, '#007BCE'],
	[0.113, '#007CCD'],
	[0.116, '#007ECD'],
	[0.119, '#0080CC'],
	[0.122, '#0082CC'],
	[0.125, '#0083CB'],
	[0.129, '#0085CB'],
	[0.132, '#0087CA'],
	[0.135, '#0089CA'],
	[0.138, '#008AC9'],
	[0.141, '#008CC9'],
	[0.144, '#008EC8'],
	[0.147, '#0090C8'],
	[0.15, '#0091C7'],
	[0.154, '#0093C7'],
	[0.157, '#0095C6'],
	[0.16, '#0097C6'],
	[0.163, '#0098C5'],
	[0.166, '#009AC5'],
	[0.169, '#009CC4'],
	[0.172, '#009EC4'],
	[0.176, '#009FC3'],
	[0.179, '#00A1C3'],
	[0.182, '#00A3C2'],
	[0.185, '#00A5C2'],
	[0.188, '#00A6C1'],
	[0.191, '#00A8C1'],
	[0.194, '#00AAC0'],
	[0.197, '#00ACC0'],
	[0.201, '#01B0BD'],
	[0.204, '#03B1BA'],
	[0.207, '#04B2B7'],
	[0.21, '#06B4B4'],
	[0.213, '#07B5B1'],
	[0.216, '#09B6AE'],
	[0.219, '#0AB7AB'],
	[0.223, '#0CB9A8'],
	[0.226, '#0DBAA5'],
	[0.229, '#0FBBA2'],
	[0.232, '#10BC9F'],
	[0.235, '#12BE9C'],
	[0.238, '#13BF99'],
	[0.241, '#15C096'],
	[0.245, '#16C193'],
	[0.248, '#18C390'],
	[0.251, '#19C48D'],
	[0.254, '#1BC58A'],
	[0.257, '#1CC687'],
	[0.26, '#1EC884'],
	[0.263, '#1FC981'],
	[0.266, '#21CA7E'],
	[0.27, '#22CB7B'],
	[0.273, '#24CD78'],
	[0.276, '#25CE75'],
	[0.279, '#27CF72'],
	[0.282, '#28D06F'],
	[0.285, '#2AD26C'],
	[0.288, '#2BD369'],
	[0.292, '#2DD466'],
	[0.295, '#2ED563'],
	[0.298, '#30D760'],
	[0.301, '#31D85D'],
	[0.304, '#33D95A'],
	[0.307, '#34DA57'],
	[0.31, '#36DC54'],
	[0.313, '#37DD51'],
	[0.317, '#39DE4E'],
	[0.32, '#3ADF4B'],
	[0.323, '#3CE148'],
	[0.326, '#3DE245'],
	[0.329, '#3FE342'],
	[0.332, '#40E43F'],
	[0.335, '#42E63C'],
	[0.339, '#43E739'],
	[0.342, '#45E836'],
	[0.345, '#46E933'],
	[0.348, '#48EB30'],
	[0.351, '#49EC2D'],
	[0.354, '#4BED2A'],
	[0.357, '#4CEE27'],
	[0.361, '#4EF024'],
	[0.364, '#4FF121'],
	[0.367, '#51F21E'],
	[0.37, '#52F31B'],
	[0.373, '#54F518'],
	[0.376, '#55F615'],
	[0.379, '#57F712'],
	[0.382, '#58F80F'],
	[0.386, '#5AFA0C'],
	[0.389, '#5BFB09'],
	[0.392, '#5DFC06'],
	[0.395, '#5EFD03'],
	[0.398, '#60FF00'],
	[0.401, '#61FF00'],
	[0.404, '#64FF00'],
	[0.408, '#66FF00'],
	[0.411, '#69FF00'],
	[0.414, '#6BFF00'],
	[0.417, '#6EFF00'],
	[0.42, '#70FF00'],
	[0.423, '#73FF00'],
	[0.426, '#75FF00'],
	[0.429, '#78FF00'],
	[0.433, '#7AFF00'],
	[0.436, '#7DFF00'],
	[0.439, '#7FFF00'],
	[0.442, '#82FF00'],
	[0.445, '#84FF00'],
	[0.448, '#87FF00'],
	[0.451, '#89FF00'],
	[0.455, '#8CFF00'],
	[0.458, '#8EFF00'],
	[0.461, '#91FF00'],
	[0.464, '#93FF00'],
	[0.467, '#96FF00'],
	[0.47, '#98FF00'],
	[0.473, '#9BFF00'],
	[0.476, '#9DFF00'],
	[0.48, '#A0FF00'],
	[0.483, '#A2FF00'],
	[0.486, '#A5FF00'],
	[0.489, '#A7FF00'],
	[0.492, '#AAFF00'],
	[0.495, '#ACFF00'],
	[0.498, '#AFFF00'],
	[0.502, '#B1FF00'],
	[0.505, '#B4FF00'],
	[0.508, '#B6FF00'],
	[0.511, '#B9FF00'],
	[0.514, '#BBFF00'],
	[0.517, '#BEFF00'],
	[0.52, '#C0FF00'],
	[0.524, '#C3FF00'],
	[0.527, '#C5FF00'],
	[0.53, '#C8FF00'],
	[0.533, '#CAFF00'],
	[0.536, '#CDFF00'],
	[0.539, '#CFFF00'],
	[0.542, '#D2FF00'],
	[0.545, '#D4FF00'],
	[0.549, '#D7FF00'],
	[0.552, '#D9FF00'],
	[0.555, '#DCFF00'],
	[0.558, '#DEFF00'],
	[0.561, '#E1FF00'],
	[0.564, '#E3FF00'],
	[0.567, '#E6FF00'],
	[0.571, '#E8FF00'],
	[0.574, '#EBFF00'],
	[0.577, '#EDFF00'],
	[0.58, '#F0FF00'],
	[0.583, '#F2FF00'],
	[0.586, '#F5FF00'],
	[0.589, '#F7FF00'],
	[0.592, '#FAFF00'],
	[0.596, '#FCFF00'],
	[0.599, '#FFFF00'],
	[0.602, '#FFFE00'],
	[0.605, '#FFFC00'],
	[0.608, '#FFFA00'],
	[0.611, '#FFF800'],
	[0.614, '#FFF600'],
	[0.618, '#FFF400'],
	[0.621, '#FFF200'],
	[0.624, '#FFF000'],
	[0.627, '#FFEE00'],
	[0.63, '#FFEC00'],
	[0.633, '#FFEA00'],
	[0.636, '#FFE800'],
	[0.639, '#FFE600'],
	[0.643, '#FFE400'],
	[0.646, '#FFE200'],
	[0.649, '#FFE000'],
	[0.652, '#FFDE00'],
	[0.655, '#FFDC00'],
	[0.658, '#FFDA00'],
	[0.661, '#FFD800'],
	[0.665, '#FFD600'],
	[0.668, '#FFD400'],
	[0.671, '#FFD200'],
	[0.674, '#FFD000'],
	[0.677, '#FFCE00'],
	[0.68, '#FFCC00'],
	[0.683, '#FFCA00'],
	[0.687, '#FFC800'],
	[0.69, '#FFC600'],
	[0.693, '#FFC400'],
	[0.696, '#FFC200'],
	[0.699, '#FFC000'],
	[0.702, '#FFBE00'],
	[0.705, '#FFBC00'],
	[0.708, '#FFBA00'],
	[0.712, '#FFB800'],
	[0.715, '#FFB600'],
	[0.718, '#FFB400'],
	[0.721, '#FFB200'],
	[0.724, '#FFB000'],
	[0.727, '#FFAE00'],
	[0.73, '#FFAC00'],
	[0.734, '#FFAA00'],
	[0.737, '#FFA800'],
	[0.74, '#FFA600'],
	[0.743, '#FFA400'],
	[0.746, '#FFA200'],
	[0.749, '#FFA000'],
	[0.752, '#FF9E00'],
	[0.755, '#FF9C00'],
	[0.759, '#FF9A00'],
	[0.762, '#FF9800'],
	[0.765, '#FF9600'],
	[0.768, '#FF9400'],
	[0.771, '#FF9200'],
	[0.774, '#FF9000'],
	[0.777, '#FF8E00'],
	[0.781, '#FF8C00'],
	[0.784, '#FF8A00'],
	[0.787, '#FF8800'],
	[0.79, '#FF8600'],
	[0.793, '#FF8400'],
	[0.796, '#FF8200'],
	[0.799, '#FF8000'],
	[0.803, '#FF7E00'],
	[0.806, '#FF7C00'],
	[0.809, '#FF7A00'],
	[0.812, '#FF7800'],
	[0.815, '#FF7600'],
	[0.818, '#FF7400'],
	[0.821, '#FF7200'],
	[0.824, '#FF7000'],
	[0.828, '#FF6E00'],
	[0.831, '#FF6C00'],
	[0.834, '#FF6A00'],
	[0.837, '#FF6800'],
	[0.84, '#FF6600'],
	[0.843, '#FF6400'],
	[0.846, '#FF6200'],
	[0.85, '#FF6000'],
	[0.853, '#FF5E00'],
	[0.856, '#FF5C00'],
	[0.859, '#FF5A00'],
	[0.862, '#FF5800'],
	[0.865, '#FF5600'],
	[0.868, '#FF5400'],
	[0.871, '#FF5200'],
	[0.875, '#FF5000'],
	[0.878, '#FF4E00'],
	[0.881, '#FF4C00'],
	[0.884, '#FF4A00'],
	[0.887, '#FF4800'],
	[0.89, '#FF4600'],
	[0.893, '#FF4400'],
	[0.897, '#FF4200'],
	[0.9, '#FF4000'],
	[0.903, '#FF3E00'],
	[0.906, '#FF3C00'],
	[0.909, '#FF3A00'],
	[0.912, '#FF3800'],
	[0.915, '#FF3600'],
	[0.918, '#FF3400'],
	[0.922, '#FF3200'],
	[0.925, '#FF3000'],
	[0.928, '#FF2E00'],
	[0.931, '#FF2C00'],
	[0.934, '#FF2A00'],
	[0.937, '#FF2800'],
	[0.94, '#FF2600'],
	[0.944, '#FF2400'],
	[0.947, '#FF2200'],
	[0.95, '#FF2000'],
	[0.953, '#FF1E00'],
	[0.956, '#FF1C00'],
	[0.959, '#FF1A00'],
	[0.962, '#FF1800'],
	[0.966, '#FF1600'],
	[0.969, '#FF1400'],
	[0.972, '#FF1200'],
	[0.975, '#FF1000'],
	[0.978, '#FF0E00'],
	[0.981, '#FF0C00'],
	[0.984, '#FF0A00'],
	[0.987, '#FF0800'],
	[0.991, '#FF0600'],
	[0.994, '#FF0400'],
	[0.997, '#FF0200'],
	[1, '#FF0000']
]
const echartsResizeForBem = new Bem('scene')
export const PlotlyBuilder = function() {
	// this.factorName = '消光系数'
	this.yUnit = 'km'
	this.zUnit = 'ug/m3'
	this.data = [
		{
			z: [],
			name: '',
			type: 'contour',
			colorscale: color,
			contours: {
				coloring: 'lines',
				showlabels: true,
				labelfont: {
					family: 'Raleway',
					size: 12
				}
			},
			colorbar: {
				thickness: 18
			},
			// colorbar: {
			//     ticks: 'outside'
			// }
			// colorbar: {
			// 	showticklabels: true,
			// 	thickness: 28,
			// 	// lenmode: 'pixels',
			// 	len: 1.1,
			// 	tickmode: 'auto',
			// 	nticks: 7,
			// 	tick0: 0,
			// 	dtick: 'L0.1',
			// 	tickformat: '0.1f',
			// 	tickfont: {
			// 		family: '微软雅黑',
			// 		size: 12,
			// 		color: '#000'
			// 	},
			// 	// title: this.factorName,
			// 	titlefont: {
			// 		family: '微软雅黑',
			// 		size: 12,
			// 		color: '#000'
			// 	},
			// 	// bgcolor: 'rgba(0, 0, 0.8, 1)',
			// 	y: 0.5,
			// 	x: 1.07
			// }
			x: [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0],
			y: [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0]
			// x: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 75, 80, 85, 90, 95, 100],
			// y: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 75, 80, 85, 90, 95, 100]
		},
		{},
		{
			x: [50, 75, 35, 10],
			y: [5, 30, 35, 20],
			mode: 'markers+text',
			textposition: 'bottom center',
			type: 'scatter',
			text: ['超站1', '超站2', '超站3', '超站4']
		}
	]
	this.layout = {
		title: 'Contour Lines',
		width: 500,
		height: 500,
		xaxis: {
			title: {
				text: 'VOCs削减百分比（%）'
			},
			showgrid: false,
			showline: true,
			autorange: 'reversed',
			rangemode: 'tozero',
			scaleratio: 2,
			tick0: 0,
			dtick: 5,
			// autotypenumbers: 'strict',
			tickmode: 'auto'
		},
		yaxis: {
			title: {
				text: 'NOX削减百分比（%）'
			},
			showgrid: false,
			showline: true,
			autorange: 'reversed', // 返向轴
			rangemode: 'tozero',
			scaleratio: 2,
			tick0: 0,
			dtick: 5,
			tickmode: 'auto' // 自适应value
		},
		// grid: {
		// 	yside: 'right'
		// },
		yaxis2: {
			title: '',
			overlaying: 'y',
			side: 'right', // Y轴右侧显示
			colorbar: true,
			position: 1,
			titlefont: {
				family: '微软雅黑',
				size: 14,
				color: '#000'
			},
			// type: 'data',
			autotick: true,
			// tick0: 0,
			// dtick: 10, // 设置显示的刻度间隔
			// tickformat: '0.1f',// 显示值保留一位小数
			tickfont: {
				family: '微软雅黑',
				size: 12,
				color: '#fff'
			},
			hoverformat: '.2f',
			fixedrange: true // Y轴拖动事件
		}
	}
	this.option = {
		displayModeBar: false
	}
	this.divname = ''
	this.Plotly = null
	this.partPblList = []
	// 设置必要出图参数
	/* if (typeof PlotlyBuilder.prototype.setOption !== 'function') {
		PlotlyBuilder.prototype.setOption = (Plotly, divname, x, y, z) => {
			this.data[0].x = x
			this.data[0].y = y
			this.data[0].z = z
			this.divname = divname
			this.Plotly = Plotly
		}
	} */
	this.setOption = (Plotly, divname, myPloltyData) => {
		console.log(Plotly, divname)
		this.divname = divname
		this.Plotly = Plotly
		this.data[0].z = myPloltyData
	}
	// 绘制伪彩图
	/* if (typeof PlotlyBuilder.prototype.newPlot !== 'function') {
		PlotlyBuilder.prototype.newPlot = () => {
			this.Plotly.newPlot(this.divname, this.data, this.layout, this.option)
		}
	} */
	this.newPlot = () => {
		echartsResizeForBem.on('chartResize', () => {
			this.resize()
		})
		// this.layout.xaxis.range = [this.data[0].x[0], this.data[0].x[this.data[0].x.length - 1]]
		return this.Plotly.newPlot(this.divname, this.data, this.layout, this.option)
	}
	// 重绘图片
	/* if (typeof PlotlyBuilder.prototype.redraw !== 'function') {
		PlotlyBuilder.prototype.redraw = () => {
			document.getElementById(this.divname).innerHTML = ""
			setTimeout(() => {
				document.getElementById(this.divname).innerHTML = ""
				this.__proto__.newPlot(this.divname, this.data, this.layout, this.options)
			}, 500)
		}
	} */
	this.redraw = () => {
		document.getElementById(this.divname).innerHTML = ''
		setTimeout(() => {
			document.getElementById(this.divname).innerHTML = ''
			this.newPlot(this.divname, this.data, this.layout)
		}, 1)
	}
	this.resize = () => {
		this.Plotly.Plots.resize(this.divname)
	}
	// 设置标题
	/* if (typeof PlotlyBuilder.prototype.setTitle !== 'function') {
		PlotlyBuilder.prototype.setTitle = (title) => {
			this.layout.title = title
		}
	} */
	this.setTitle = title => {
		this.layout.title = title
	}
	// 设置因子名称
	/* if (typeof PlotlyBuilder.prototype.setFactorName !== 'function') {
		PlotlyBuilder.prototype.setFactorName = (factorName) => {
			this.factorName = factorName
			this.data[0].colorbar.title = factorName
			this.setHovertemplate()
		}
	} */
	this.setFactorName = factorName => {
		this.factorName = factorName
		this.data[0].colorbar.title = factorName
		this.setHovertemplate()
	}
	// 设置Z轴单位
	/* if (typeof PlotlyBuilder.prototype.setYUnit !== 'function') {
		PlotlyBuilder.prototype.setYUnit = (yUnit) => {
			this.yUnit = yUnit
			this.layout.yaxis.title = `高度（${this.yUnit}）`
			this.setHovertemplate()
		}
	} */
	this.setYUnit = yUnit => {
		this.yUnit = yUnit
		this.layout.yaxis.title = `高度（${this.yUnit}）`
		this.setHovertemplate()
	}
	/* if (typeof PlotlyBuilder.prototype.setZUnit !== 'function') {
		PlotlyBuilder.prototype.setZUnit = (zUnit) => {
			this.zUnit = zUnit
			this.setHovertemplate()
		}
	} */
	this.setZUnit = zUnit => {
		this.zUnit = zUnit
		this.setHovertemplate()
	}
	// 设置图表tooltip
	/* if (typeof PlotlyBuilder.prototype.setHovertemplate !== 'function') {
		PlotlyBuilder.prototype.setHovertemplate = () => {
			this.data[0].hovertemplate = '时间：%{x}<br />高度：%{y}'+this.yUnit+'<br />'+this.factorName+'：%{z:.6~f}'+this.zUnit
		}
	} */
	this.setHovertemplate = () => {
		this.data[0].hovertemplate =
			'时间：%{x}<br />高度：%{y}' + this.yUnit + '<br />' + this.factorName + '：%{z:.6~f}' + this.zUnit
	}
	this.setZminZmax = (zmin, zmax) => {
		this.data[0].zmin = zmin
		this.data[0].zmax = zmax
	}
	this.setPbl = type => {
		if (type) {
			this.data[1].y = this.partPblList
			this.data[1].x = this.data[0].x
			this.redraw()
		} else {
			this.data[1].y = []
			this.data[1].x = []
			this.redraw()
		}
	}
	this.setPblWithData = (type, data, times) => {
		if (type) {
			this.layout.yaxis2.tickfont.color = '#4d4d4d'
			this.data[1].y = data.data
			this.data[1].x = times
			this.layout.yaxis2.title = `${data.name}(${data.unit})`
			this.redraw()
		} else {
			this.layout.yaxis2.tickfont.color = '#fff'
			this.layout.yaxis2.title = ''
			this.data[1].y = []
			this.data[1].x = []
			this.redraw()
		}
	}
	this.downloadImage = fileName => {
		this.Plotly.downloadImage(this.divname, {
			format: 'png',
			width: 1467,
			height: 350,
			filename: fileName
		})
	}
}
export const myColor = color
