import { readFile, writeFile } from 'node:fs/promises'
import { renderPages } from '../dist-ssr/prerender.mjs'

// Render the same Vue components as the browser so crawlers receive the full content.
for (const [page, content] of Object.entries(await renderPages())) {
  const file = new URL(`../dist/${page}`, import.meta.url)
  const html = await readFile(file, 'utf8')
  const shell = '<div id="app"></div>'
  if (!html.includes(shell)) throw new Error(`Missing app shell in ${page}`)
  await writeFile(file, html.replace(shell, () => `<div id="app">${content}</div>`))
}
