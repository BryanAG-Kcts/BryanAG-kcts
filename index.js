import { promises as fs } from 'fs'
import { renderTechMarkdown } from './src/components/tech.js'
import { renderSocialsMarkdown } from './src/components/socials.js'
;(async () => {
  const readmes = await fs.readdir('./src/locales', {
    encoding: 'utf-8'
  })

  readmes.forEach(async (readme) => {
    const readmeContent = await fs.readFile(`./src/locales/${readme}`, {
      encoding: 'utf-8'
    })

    const completeReadme = readmeContent
      .replace('{{SOCIALS}}', renderSocialsMarkdown())
      .replace('{{TECH}}', renderTechMarkdown())

    await fs.writeFile(`./translations/${readme}`, completeReadme)
    if (readme === 'readme-en.md') {
      await fs.copyFile(`./translations/${readme}`, `./README.md`)
    }
  })
})()
