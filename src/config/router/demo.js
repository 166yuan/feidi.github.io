/**
 * Created by sailengsi on 2017/4/30.
 */
import {
	Home,
	Content,
	Modules
} from '../../components/';

module.exports = [{
	path: '/demo',
	name: '真实交互',
	icon: 'inbox',
	component: Home,
	redirect: '/demo/user',
	children: [{
		path: 'user',
		name: '送水工管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/user/list',
		children: [{
			path: 'list',
			name: '送水工列表',
			icon: 'reorder',
			component: Modules.Demo.User.List
		}]
	}, {
		path: 'order',
		name: '订单管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/order/list',
		children: [{
			path: 'list',
			name: '订单列表',
			icon: 'reorder',
			component: Modules.Demo.Order.List
		}, {
			path: 'count',
			name: '订单统计',
			icon: 'edit',
			component: Modules.Demo.Order.Pie
		}]
	}, {
		path: 'authen',
		name: '认证管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/authen/list',
		children: [{
			path: 'list',
			name: '认证列表',
			icon: 'reorder',
			component: Modules.Demo.Authen.List
		}]
	}, {
		path: 'cash',
		name: '提现管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/cash/list',
		children: [{
			path: 'list',
			name: '提现列表',
			icon: 'reorder',
			component: Modules.Demo.Cash.List
		}]
	}, {
		path: 'admin',
		name: '管理员管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/admin/list',
		children: [{
			path: 'list',
			name: '管理员列表',
			icon: 'reorder',
			component: Modules.Demo.Admin.List
		}, {
			path: 'edit',
			name: '编辑信息',
			icon: 'edit',
			component: Modules.Demo.Admin.Edit
		}]
	}]
}];