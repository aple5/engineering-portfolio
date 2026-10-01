import { defineConfig } from 'astro/config';

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const projectName = repository || 'engineering-portfolio';

export default defineConfig({
  output: 'static',
  site: owner ? `https://${owner}.github.io` : undefined,
  base: owner && projectName === `${owner}.github.io` ? '/' : `/${projectName}`,
});
