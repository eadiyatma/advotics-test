import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/index.css'
import 'v-calendar/dist/style.css'
import VCalendar from 'v-calendar';

import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VCalendar, {})

app.use(VueApexCharts)

app.mount('#app')
