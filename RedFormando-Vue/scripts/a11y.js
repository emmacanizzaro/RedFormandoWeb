#!/usr/bin/env node

const pa11y = require('pa11y')

;(async () => {
  const urls = [
    'http://localhost:5177/',
    'http://localhost:5177/familia',
    'http://localhost:5177/recursos',
    'http://localhost:5177/recursos-libros',
    'http://localhost:5177/blog',
  ]

  let hasErrors = false

  for (const url of urls) {
    console.log(`\nAuditoría de accesibilidad para: ${url}`)
    const results = await pa11y(url, { timeout: 60000 })
    if (results.issues.length > 0) {
      hasErrors = true
      results.issues.forEach((issue) => {
        console.log(`  [${issue.type}] ${issue.message} (${issue.selector})`)
      })
    } else {
      console.log('  Sin problemas de accesibilidad encontrados.')
    }
  }

  if (hasErrors) {
    process.exit(1)
  }
})()
