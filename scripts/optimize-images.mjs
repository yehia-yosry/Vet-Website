// Usage: npm run images
// Converts every JPG/PNG in src/assets/images/**/originals into responsive WebP files
// (640w + 1200w) placed next to it, e.g. gallery/poodle.jpg -> gallery/poodle-640.webp, poodle-1200.webp
import { readdir, mkdir } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'
import sharp from 'sharp'

const root = new URL('../src/assets/images/', import.meta.url).pathname.replace(/^\/(\w:)/, '$1')
const sizes = [640, 1200]

for (const dir of await readdir(root, { withFileTypes: true })) {
  if (!dir.isDirectory() || dir.name === 'branding') continue
  const src = join(root, dir.name, 'originals')
  let files = []
  try {
    files = await readdir(src)
  } catch {
    continue
  }
  for (const file of files) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue
    const name = basename(file, extname(file))
    for (const w of sizes) {
      await sharp(join(src, file))
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(join(root, dir.name, `${name}-${w}.webp`))
    }
    console.log('optimized', dir.name, name)
  }
}
await mkdir(root, { recursive: true })
