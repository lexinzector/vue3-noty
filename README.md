# vue3-noty

A Vue3 wrapper around [Noty](http://ned.im/noty/). Developped for Vue 3.

## Getting Started

Install using npm:

```bash
npm install @lexinzector/vue3-noty
```

Include using script tag:

```html
<script src="/dist/vue3-noty.umd.js"></script>
// or
<script type="module" src="/dist/vue3-noty.es.js"></script>
```

Import and register Vue plugin:

```js
import { createApp } from 'vue';
import App from './App.vue';
import NotyPlugin from '@lexinzector/vue3-noty';

const app = createApp(App);

// По желанию передать дефолтные опции Noty
app.use(NotyPlugin, {
  timeout: 4000,
  progressBar: true,
})

app.mount('#app');
```

### Import noty styles

Import stylesheet in your vue / js components:

```js
import '@lexinzector/vue3-noty/dist/vue3-noty.css';
```

Or, import styles in your less / scss stylesheet:

```less
@import '~@lexinzector/vue3-noty/dist/vue3-noty.css';
```

## Usage

In your Vue.js components, simply call one of these methods:

### Options API

```js
// Basic alert
this.$noty.show("Hello world!");

// Success notification
this.$noty.success("Your profile has been saved!");

// Error message
this.$noty.error("Oops, something went wrong!");

// Warning
this.$noty.warning("Please review your information.");

// Basic alert
this.$noty.info("New version of the app is available!");
```

All of these methods will return a Noty object instance, so you can use available [API methods](https://ned.im/noty/#/api). Example:

```js
this.$noty.show("Hello world!").setTimeout(4500);
```

Create your own notification with access to the [full list of options](https://ned.im/noty/#/options). Example:

```js
this.$noty.create({
  text: 'This is a custom notification!',
  type: 'warning',
  layout: 'topCenter',
  timeout: 4500,
  progressBar: false
}).show();
```

### Composition API

```js
import { inject } from 'vue';

export default {
  setup() {
    const noty = inject('noty');

    function notifyError() {
      noty.error('Ошибка!');
    }

    return { notifyError }
  }
}
```

## Configuration

### Config defaults

You can set a default configuration object when registering the plugin. Example:

```js
app.use(NotyPlugin, {
  timeout: 4000,
  progressBar: true,
  layout: 'topCenter'
});
```

### Config override

All of the alert methods can accept a config object as second parameter if you need to override the defaults. Example:

```js
this.$noty.info("Hey! Something very important here...", {
  killer: true,
  timeout: 6000,
  layout: 'topRight'
});
```

For more information about available configuration properties, please read [Noty's documentation](https://ned.im/noty/#/options).
