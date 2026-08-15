import { createApp, h } from 'vue'
import NavBar from './components/NavBar.vue'
import Donate from './components/Donate.vue'
import Footer from './components/Footer.vue'
import './index.css'

createApp({
  render: () => h('div', [h(NavBar), h(Donate), h(Footer)])
}).mount('#app')
