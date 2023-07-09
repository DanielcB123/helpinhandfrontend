// Adding google maps api and vue2-google-maps
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css';
import GoogleMap from 'vue3-google-map';
import axios from 'axios';  // import axios

const app = createApp(App);

app.config.globalProperties.$http = axios;  // set axios as $http

app.use(router);
app.use(store);
app.use(GoogleMap, {
  load: {
    apiKey: 'AIzaSyCQDcXXAfFctyxsDyZSRqfEoXVr3ypsDbk',
    libraries: ['places'], // necessary for places input
  },
});

app.mount('#app');
