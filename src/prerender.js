import { h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import DonateApp from './donate-app.js'

export async function renderPages() {
  return {
    'index.html': await renderToString(h(App)),
    'donate.html': await renderToString(h(DonateApp))
  }
}
