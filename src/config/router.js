import {
	Login,
	Register,
	Home,
	NotFound,
	Content,
	Modules
} from '../components/';

module.exports = [{
	path    : '/',
	redirect: to => {
		return 'login';
	},
	hidden  : true
}, {
	path     : '/login',
	component: Login,
	hidden   : true
},{
	path     : '/register',
	component: Register,
	hidden   : true
},{
	path     : '/404',
	component: Home,
	hidden   : true,
	children : [{
		path     : '',
		component: NotFound
	}]
}]
	.concat(require('./router/function.js'))
	.concat(require('./router/demo.js'))
	// .concat(require('./router/components.js'))
	// .concat(require('./router/adv.js'))
