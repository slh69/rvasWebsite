const { readFileSync, existsSync } = require('node:fs')
const { test } = require('node:test')
const assert = require('node:assert/strict')

const read = (file) => readFileSync(new URL(`../dist/${file}`, `file://${__filename}`), 'utf8')

test('production canonicals, social URLs, sitemap, and robots use the confirmed domain consistently', () => {
  const pageUrls = ['https://rossvilleambulance.com/', 'https://rossvilleambulance.com/donate.html']
  for (const [index, page] of ['index.html', 'donate.html'].entries()) {
    const html = read(page)
    const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((match) => match[1])
    const socialUrls = [...html.matchAll(/<meta property="og:url" content="([^"]+)"/g)].map((match) => match[1])
    assert.deepEqual(canonicals, [pageUrls[index]])
    assert.deepEqual(socialUrls, canonicals)
    assert.doesNotMatch(html, /<meta name="robots" content="[^"]*noindex/)
  }
  const organization = JSON.parse(read('index.html').match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])
  assert.equal(organization.url, pageUrls[0])
  assert.equal(organization['@id'], `${pageUrls[0]}#organization`)
  const sitemap = read('sitemap.xml')
  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/)
  assert.match(sitemap, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">[\s\S]*<\/urlset>/)
  assert.equal((sitemap.match(/<url>/g) || []).length, 2)
  assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]), pageUrls)
  assert.equal(read('robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: https://rossvilleambulance.com/sitemap.xml\n')
})

test('production pages include readable content and working assets before JavaScript runs', () => {
  for (const page of ['index.html', 'donate.html']) {
    const html = read(page)
    assert.doesNotMatch(html, /<div id="app"><\/div>/)
    assert.equal((html.match(/<h1\b/g) || []).length, 1)
    assert.equal((html.match(/<main\b/g) || []).length, 1)
    assert.match(html, /href="\/donate\.html"/)
    assert.match(html, /<script\b[^>]*type="module"[^>]*src="\/assets\//)
    for (const [, asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"?]+)"/g)) {
      assert.ok(existsSync(new URL(`../dist${asset}`, `file://${__filename}`)), `${page} references missing asset ${asset}`)
    }
  }
  const home = read('index.html')
  assert.match(home, /Rossville Volunteer Ambulance Service<\/h1>/)
  assert.match(home, /50 E North Street, Rossville, IN 46065/)
  assert.match(home, /href="mailto:rvassec@gmail\.com"/)
  assert.equal((home.match(/<details\b/g) || []).length, 5)
  assert.equal((home.match(/<summary\b[^>]*>[^<]+<\/summary>/g) || []).length, 5)
  assert.match(home, /The county provides the ambulance, fuel, truck maintenance, and some training/)
  assert.match(home, /All EMTs, EMRs, and drivers are volunteers/)
  const donate = read('donate.html')
  assert.match(donate, /Donate to Rossville Volunteer Ambulance Service<\/h1>/)
  assert.match(donate, /https:\/\/donate\.stripe\.com\/8x2fZi0ws8QQ6CM1wX67S01/)
  assert.match(donate, /https:\/\/donate\.stripe\.com\/dRmcN6frm1oobX62B167S03/)
  assert.match(donate, /Choose your monthly amount/)
})
