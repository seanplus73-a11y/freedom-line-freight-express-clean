import { copyFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const source = join(__dirname, '_routes.json');
const dest = join(__dirname, 'dist', '_routes.json');

if (existsSync(source)) {
  copyFileSync(source, dest);
  console.log('✅ Copied _routes.json to dist/');
} else {
  console.error('❌ _routes.json not found at root level!');
  process.exit(1);
}
