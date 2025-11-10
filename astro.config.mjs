import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hyunju509.github.io/portfolio',
  base: '/portfolio/',
  outDir: './docs',   // ← Pages가 읽을 폴더
});