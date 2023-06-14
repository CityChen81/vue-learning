import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseUserComponent from './components/BaseUserComponent.vue'

const app = createApp(App);

app.component("BaseUserComponent", BaseUserComponent)

app.provide('globalData', '这是全局数据')

app.mount('#app');
