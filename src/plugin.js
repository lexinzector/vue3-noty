import NotyService from './NotyService';

export default {
	install(app, options = {}) {
		const service = new NotyService(options);

		// доступ как this.$noty
		app.config.globalProperties.$noty = service;

		// доступ через provide/inject
		app.provide('noty', service);
	}
}
