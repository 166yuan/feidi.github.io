/**
 * Created by sailengsi on 2017/4/30.
 */
import {
	Home,
	Content,
	Product,
	Modules
} from '../../components/';

module.exports = [{
	path: '/function',
	name: '静态演示',
	icon: 'inbox',
	component: Home,
	redirect: '/function/open',
	children: [{
		path: 'open',
		name: '公共内容',
		icon: 'inbox',
		component: Content,
		redirect: '/function/open/list',
		children: [{
			path: 'echarts',
			name: '图表',
			icon: 'bar-chart',
			component: Modules.Function.Open.Echarts
		}, {
			path: 'list',
			name: '列表',
			icon: 'reorder',
			component: Modules.Function.Open.List
		}, {
			path: 'product/list',
			name: '商品列表',
			icon: 'edit',
			component: Product.List
		},{
			path: 'product/add',
			name: '上传商品',
			icon: 'edit',
			component: Product.Add
		}
		, {
			path: 'vuex',
			name: 'Vuex',
			icon: 'window-restore',
			component: Modules.Function.Open.Vuex
		}, {
			path: 'test404',
			name: '测试404',
			icon: 'window-restore',
			component: Modules.Function.Open.Test404
		}]
	}]
}];