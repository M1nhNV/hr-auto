import { defineConfig } from 'prisma/config'
import { resolve } from 'path';
export default defineConfig({
  earlyAccess: true,
  schema: {
    kind: 'single',
    filePath: resolve('./src/lib/prisma/schema.prisma')
  }
});
