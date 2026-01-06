const techStack = [
  'astro-icon-dark',
  'css',
  'expo',
  'html5',
  'javascript',
  'nextjs_icon_dark',
  'react_dark',
  'shadcn-ui',
  'tailwindcss',
  'threejs-dark',
  'expressjs',
  'mongodb-icon-dark',
  'nodejs',
  'postgresql',
  'typescript',
  'biomejs',
  'eslint-icon-dark',
  'prettier-icon-dark',
  'vitejs',
  'git',
  'github_light',
  'vercel',
  'zen-browser-dark',
  'zod'
]

export function renderTechMarkdown() {
  return techStack
    .map(
      (tech) =>
        `<img src="https://svgl.app/library/${tech}.svg" height="40" width="40" alt="${tech}" style="margin-right: 12px;" />`
    )
    .join('\n')
}
