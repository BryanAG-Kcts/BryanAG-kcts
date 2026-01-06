const socials = [
  {
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/bryanag-kcts/'
  },
  {
    icon: 'gmail',
    url: 'mailto:bryanalvarezg.kcts@gmail.com'
  },
  {
    icon: 'telegram',
    url: 'https://t.me/BryanAG_kcts"'
  }
]

export function renderSocialsMarkdown() {
  return socials
    .map(
      (social) =>
        `<img width="6" /><a href="${social.url}" target="_blank"><img src="https://svgl.app/library/${social.icon}.svg" height="30" alt="${social.icon}" /></a><img width="6" />`
    )
    .join('\n')
}
