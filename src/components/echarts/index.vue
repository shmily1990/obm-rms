<template>
	<div class="echarts" :id="id" :style="style"></div>
</template>

<script>
import * as Echarts from 'echarts'
// import Bem from 'better-event-manager'
// const echartsResizeForBem = new Bem('scene')

export default {
	name: 'Index',
	props: {
		id: {
			type: String
		},
		width: {
			type: String,
			default: '100%'
		},
		height: {
			type: String
		},
		option: {
			type: Object
		},
		dataZoom: {
			type: Function,
			default: null
		},
		brush: {
			type: Function,
			default: null
		},
		legendselectchanged: {
			type: Function,
			default: null
		},
		chartClick: {
			type: Function,
			default: null
		},
		contextmenu: {
			type: Function,
			default: null
		}
	},
	data() {
		return {
			MyCharts: '' // Echarts实例
			// picInfo: null
		}
	},
	computed: {
		style() {
			return {
				height: this.height,
				width: this.width
			}
		},
		picInfo() {
			const base64 = this.MyCharts.getDataURL()
			return base64
		}
	},
	watch: {
		// 要监听的对象 option
		// 由于echarts采用的数据驱动，所以需要监听数据的变化来重绘图表
		option: {
			handler(newVal, oldVal) {
				if (this.MyCharts) {
					if (newVal) {
						this.MyCharts.setOption(newVal, true)
					} else {
						this.MyCharts.setOption(oldVal, true)
					}
				} else {
					this.InitCharts()
				}
			},
			deep: true // 对象内部属性的监听，关键。
		}
	},
	mounted() {
		// const _this = this;
		this.InitCharts()
		window.addEventListener('resize', this.resize)
		// echartsResizeForBem.on('chartResize', () => {
		// 	this.resize()
		// })
		if (this.dataZoom) this.MyCharts.on('dataZoom', this.dataZoom)
		if (this.brush) this.MyCharts.on('brushSelected', this.brush)
		if (this.legendselectchanged) {
			this.MyCharts.on('legendselectchanged', this.legendselectchanged, this.option)
		}
		if (this.chartClick) this.MyCharts.on('click', this.chartClick)
		if (this.contextmenu) this.MyCharts.on('contextmenu', this.contextmenu)
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.resize)
	},
	methods: {
		resize() {
			const width = window.getComputedStyle(this.$el, null).getPropertyValue('width')
			if (/\d+px$/.test(width)) {
				this.MyCharts.resize()
			}
		},
		// 所设计的图表公共组件，按照官网的格式来写数据，这样方便维护
		InitCharts(theme = 'default') {
			if (!this.option) {
				return
			}
			console.log(Echarts)
			this.MyCharts = Echarts.init(this.$el, theme)
			/**
			 * 此方法适用于所有项目的图表，但是每个配置都需要在父组件传进来，相当于每个图表的配置都需要写一遍，不是特别的省代码，主要是灵活度高
			 * echarts的配置项，可以直接在外边配置好，直接扔进来一个this.option
			 */
			this.MyCharts.clear() // 适用于大数据量的切换时图表绘制错误,先清空在重绘
			this.MyCharts.setOption(this.option, true) // 设置为true可以是图表切换数据时重新渲染
			this.MyCharts.dispatchAction({
				type: 'takeGlobalCursor',
				// 如果想变为“可刷选状态”，必须设置。不设置则会关闭“可刷选状态”。
				key: 'brush',
				brushOption: {
					// 参见 brush 组件的 brushType。如果设置为 false 则关闭“可刷选状态”。
					brushType: 'lineX'
					// 参见 brush 组件的 brushMode。如果不设置，则取 brush 组件的 brushMode 设置。
					// brushMode: String
				}
			})
		}
	}
}
</script>
