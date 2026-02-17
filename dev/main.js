import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

import Noty from 'noty';
import NotyPlugin from '../src';

const app = createApp(App);

Noty.setMaxVisible(8);
app.use(NotyPlugin, {
	layout: 'bottomRight',
	timeout: 1000,
	progressBar: false,
})

app.mount('#app');
