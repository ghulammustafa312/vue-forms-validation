import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import BasicForm from './components/BasicForm.vue';
import FormValidation from './components/FormValidation.vue';
import ValueBinding from './components/ValueBinding.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false;
// import "uikit/dist/css/uikit.min.css";

Vue.use(VueRouter);

const router = new VueRouter({
	base: __dirname,
	mode:'history',
	routes: [
		{
			path: '/',
			component: BasicForm,
		},
		{ path: '/validate', component: FormValidation },
		{ path: '/binding', component: ValueBinding },
	],
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
