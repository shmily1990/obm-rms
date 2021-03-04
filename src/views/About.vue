<template>
	<div class="about">
		<div id="myDiv" style="display:flex;justify-content:center;position:relative;">
			<canvas
				id="myCanvas"
				width="20"
				height="80"
				style="position:absolute;height:298px;width:18px;margin:111px 0 0 393px;"
			></canvas>
		</div>
	</div>
</template>
<script>
import { removeToken } from '@/libs/utils'
import { PlotlyBuilder, myColor } from './plotlyScript'
export default {
	name: 'rirAnalysis',
	data() {
		return {
			loading: false,
			filterShow: true,
			option: {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						// 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					},
					appendToBody: true
				},
				backgroundColor: '#ffffff',
				title: {
					text: '湖南省超站各前体物消减10%后平均RIR',
					left: 'center',
					bottom: 0,
					textStyle: {
						fontSize: 16,
						fontWeight: 'bold'
					}
				},
				// legend: {
				// 	selectedMode: true, // 不可点击
				// 	top: 10,
				// 	right: 80,
				// 	data: [],
				// 	width: 600,
				// 	itemGap: 5,
				// 	textStyle: {
				// 		fontWeight: 'bold'
				// 	}
				// },
				grid: {
					left: 80,
					right: 40,
					show: true,
					borderColor: '#000000',
					borderWidth: 1
				},
				xAxis: [
					{
						type: 'category',
						data: ['NOx', 'NHC', 'AHC', 'CO'],
						axisLabel: {
							fontWeight: 'bold',
							interval: 0
						},
						splitLine: {
							show: false,
							lineStyle: {
								width: 1,
								color: ['#000'],
								type: 'dashed'
							}
						}
					},
					{
						type: 'category',
						position: 'top',
						data: [],
						axisPointer: {
							type: 'none'
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						name: 'RIR,%%',
						nameLocation: 'middle',
						max: 1.2,
						nameTextStyle: {
							fontSize: 14,
							color: '#323233',
							fontWeight: 'bold',
							padding: [0, 30, 20, 20]
						},
						nameRotate: 90,
						splitLine: {
							// 不显示分割线
							show: false
						},
						axisLabel: {
							formatter: '{value}',
							fontSize: 14,
							fontWeight: 'bold'
						}
					}
				],
				series: [
					{
						name: 'RIR',
						data: [-0.7, 0.02, 0.9, 0.13],
						type: 'bar',
						barMaxWidth: 20,
						itemStyle: {
							normal: {
								color: '#FE4040',
								borderWidth: 1,
								borderColor: '#000'
							}
						}
					}
				]
			}
		}
	},
	methods: {
		async logoin() {
			const params = {
				username: 'js_center',
				password: '123456',
				responseBodyType: 20,
				needLoginOld: true
			}
			const res = await this.$http.post('signIn', params, {
				isMock: false,
				transformData: false,
				type: 'form'
			})
		},
		buildPlolty() {
			console.log(this.$http)
			const d = new PlotlyBuilder()
			console.log(d)
			const data = [
				[
					45.67,
					45.82,
					45.89,
					45.9,
					45.87,
					45.8,
					45.71,
					45.6,
					45.49,
					45.37,
					45.25,
					45.13,
					45.01,
					44.9,
					44.8,
					44.7,
					44.6,
					44.51,
					44.43,
					44.35,
					44.28
				],
				[
					50.19,
					50.54,
					50.79,
					50.97,
					51.07,
					51.12,
					51.13,
					51.11,
					51.06,
					51,
					50.93,
					50.84,
					50.75,
					50.66,
					50.57,
					50.47,
					50.38,
					50.29,
					50.2,
					50.12,
					50.04
				],
				[
					53.98,
					54.53,
					54.97,
					55.31,
					55.57,
					55.76,
					55.9,
					55.99,
					56.04,
					56.07,
					56.06,
					56.04,
					56.01,
					55.96,
					55.9,
					55.84,
					55.78,
					55.71,
					55.64,
					55.56,
					55.49
				],
				[
					57.11,
					57.86,
					58.49,
					59.02,
					59.44,
					59.79,
					60.07,
					60.29,
					60.46,
					60.58,
					60.67,
					60.74,
					60.77,
					60.79,
					60.79,
					60.78,
					60.76,
					60.72,
					60.69,
					60.64,
					60.6
				],
				[
					59.67,
					60.62,
					61.44,
					62.14,
					62.74,
					63.25,
					63.68,
					64.04,
					64.34,
					64.58,
					64.78,
					64.94,
					65.06,
					65.16,
					65.23,
					65.28,
					65.32,
					65.34,
					65.35,
					65.35,
					65.34
				],
				[
					61.68,
					62.83,
					63.85,
					64.74,
					65.51,
					66.19,
					66.77,
					67.28,
					67.71,
					68.09,
					68.4,
					68.67,
					68.9,
					69.09,
					69.24,
					69.37,
					69.48,
					69.56,
					69.63,
					69.68,
					69.72
				],
				[
					63.18,
					64.54,
					65.75,
					66.82,
					67.78,
					68.63,
					69.37,
					70.03,
					70.61,
					71.12,
					71.56,
					71.95,
					72.29,
					72.58,
					72.83,
					73.05,
					73.23,
					73.39,
					73.53,
					73.64,
					73.74
				],
				[
					64.15,
					65.73,
					67.14,
					68.41,
					69.55,
					70.58,
					71.49,
					72.31,
					73.04,
					73.7,
					74.28,
					74.79,
					75.25,
					75.65,
					76.01,
					76.32,
					76.6,
					76.84,
					77.05,
					77.24,
					77.4
				],
				[
					64.6,
					66.4,
					68.03,
					69.51,
					70.84,
					72.05,
					73.14,
					74.13,
					75.02,
					75.82,
					76.55,
					77.19,
					77.78,
					78.3,
					78.77,
					79.19,
					79.57,
					79.91,
					80.21,
					80.48,
					80.72
				],
				[
					64.49,
					66.53,
					68.39,
					70.09,
					71.63,
					73.03,
					74.31,
					75.47,
					76.53,
					77.49,
					78.37,
					79.16,
					79.88,
					80.54,
					81.13,
					81.67,
					82.15,
					82.59,
					82.99,
					83.35,
					83.67
				],
				[
					63.8,
					66.1,
					68.2,
					70.13,
					71.89,
					73.5,
					74.98,
					76.33,
					77.57,
					78.71,
					79.74,
					80.69,
					81.56,
					82.35,
					83.07,
					83.73,
					84.34,
					84.89,
					85.39,
					85.85,
					86.27
				],
				[
					62.52,
					65.08,
					67.44,
					69.61,
					71.6,
					73.44,
					75.13,
					76.69,
					78.12,
					79.43,
					80.64,
					81.76,
					82.78,
					83.72,
					84.59,
					85.38,
					86.11,
					86.78,
					87.4,
					87.97,
					88.49
				],
				[
					60.7,
					63.5,
					66.1,
					68.52,
					70.75,
					72.82,
					74.74,
					76.51,
					78.14,
					79.66,
					81.05,
					82.34,
					83.54,
					84.64,
					85.66,
					86.6,
					87.47,
					88.27,
					89.01,
					89.7,
					90.33
				],
				[
					58.46,
					61.45,
					64.26,
					66.89,
					69.36,
					71.65,
					73.79,
					75.78,
					77.63,
					79.35,
					80.95,
					82.43,
					83.8,
					85.08,
					86.26,
					87.36,
					88.38,
					89.32,
					90.2,
					91.02,
					91.77
				],
				[
					55.98,
					59.08,
					62.03,
					64.83,
					67.48,
					69.98,
					72.33,
					74.53,
					76.59,
					78.52,
					80.31,
					81.99,
					83.56,
					85.02,
					86.38,
					87.64,
					88.82,
					89.92,
					90.95,
					91.9,
					92.79
				],
				[
					53.42,
					56.56,
					59.58,
					62.48,
					65.26,
					67.91,
					70.43,
					72.81,
					75.06,
					77.18,
					79.17,
					81.04,
					82.8,
					84.45,
					85.99,
					87.43,
					88.79,
					90.05,
					91.23,
					92.34,
					93.38
				],
				[
					50.92,
					54.03,
					57.06,
					60,
					62.84,
					65.58,
					68.21,
					70.73,
					73.13,
					75.41,
					77.57,
					79.62,
					81.56,
					83.39,
					85.11,
					86.73,
					88.26,
					89.69,
					91.04,
					92.31,
					93.5
				],
				[
					48.53,
					51.58,
					54.58,
					57.51,
					60.36,
					63.14,
					65.82,
					68.42,
					70.92,
					73.32,
					75.61,
					77.81,
					79.9,
					81.89,
					83.78,
					85.57,
					87.26,
					88.86,
					90.38,
					91.81,
					93.15
				],
				[
					46.29,
					49.27,
					52.2,
					55.08,
					57.91,
					60.68,
					63.38,
					66.01,
					68.56,
					71.03,
					73.41,
					75.71,
					77.92,
					80.03,
					82.06,
					83.99,
					85.84,
					87.6,
					89.27,
					90.85,
					92.35
				],
				[
					44.22,
					47.1,
					49.96,
					52.77,
					55.55,
					58.28,
					60.96,
					63.59,
					66.15,
					68.65,
					71.08,
					73.44,
					75.73,
					77.93,
					80.06,
					82.11,
					84.08,
					85.96,
					87.77,
					89.49,
					91.14
				],
				[
					42.3,
					45.09,
					47.86,
					50.6,
					53.32,
					55.99,
					58.63,
					61.23,
					63.78,
					66.27,
					68.72,
					71.1,
					73.43,
					75.69,
					77.88,
					80.01,
					82.06,
					84.05,
					85.96,
					87.8,
					89.57
				]
			]
			d.setOption(this.$Plotly, 'myDiv', data)
			// d.builder.setZminZmax(d.colorer.min, d.colorer.max)
			d.newPlot()
		},
		buildCanvas() {
			const canvas = document.getElementById('myCanvas')
			const ctx = canvas.getContext('2d')
			var grd = ctx.createLinearGradient(0, 0, 20, 80)
			// const arr = myColor.reverse()
			const len = myColor.length
			myColor.forEach((r, index) => {
				grd.addColorStop(r[0], myColor[len - 1 - index][1])
			})
			ctx.fillStyle = grd
			ctx.fillRect(0, 0, 20, 80)
		}
	},
	mounted() {
		this.logoin()
		console.log(this.$Plotly)
		this.buildPlolty()
		this.buildCanvas()
	}
}
</script>

<style scoped lang="scss">
.rir-analysis {
	display: flex;
	width: 100%;
	.analysis-left {
		width: 100%;
		flex: 1 1 auto;
		position: relative;
		transition: width 0.3s;
		.charts {
			height: calc(100vh - 268px);
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
		}
	}
	.analysis-right {
		transition: width 0.3s;
		padding: 10px;
		background: #fafafa;
		border-left: 1px solid #f0f0f0;
	}
	.filter-show {
		width: 350px;
	}
	.filter-hide {
		width: 36px;
	}
}
</style>
