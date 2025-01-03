export const dynamic = 'force-dynamic' // Ensures it's always dynamic

import { articles } from '../../articles.js'

function generateSiteMap(articles) {
  const staticUrls = [
    { loc: 'https://www.noor-elarab.com', priority: 1.0 },
    { loc: 'https://www.noor-elarab.com/services', priority: 0.8 },
    { loc: 'https://www.noor-elarab.com/about', priority: 0.8 },
    { loc: 'https://www.noor-elarab.com/gallery', priority: 0.8 },
    { loc: 'https://www.noor-elarab.com/contact', priority: 0.8 },
    { loc: 'https://www.noor-elarab.com/blog/1', priority: 0.8 },
    { loc: 'https://www.noor-elarab.com/blog/2', priority: 0.8 },
    { loc: 'https://www.noor-elarab.com/blog/3', priority: 0.8 },
    { loc: 'https://www.noor-elarab.com/blog/4', priority: 0.8 },
    { loc: 'https://www.noor-elarab.com/blog/5', priority: 0.8 },
    { loc: 'https://www.noor-elarab.com/blog/6', priority: 0.8 },
    { loc: 'https://www.noor-elarab.com/blog/7', priority: 0.8 },
  ]

  const staticEntries = staticUrls
    .map(({ loc, priority }) => {
      return `
        <url>
          <loc>${loc}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>${priority.toFixed(2)}</priority>
        </url>`
    })
    .join('')

  const dynamicEntries = articles
    .map(({ slug }) => {
      return `
        <url>
          <loc>https://www.noor-elarab.com/articles/${slug}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>0.6</priority>
        </url>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Static URLs -->
      ${staticEntries}
      <!-- Dynamic URLs -->
      ${dynamicEntries}
    </urlset>`
}

export async function GET(request) {
  const sitemap = generateSiteMap(articles)

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
