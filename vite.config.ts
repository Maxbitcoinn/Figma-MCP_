import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const externalPackages = [
  '@modelcontextprotocol/sdk',
  '@modelcontextprotocol/nodes',
];

const serverModuleRelative = 'src/talk_to_figma_mcp/server.ts';
const serverModuleAbsolute = path.resolve(__dirname, serverModuleRelative);

export default defineConfig({
  optimizeDeps: {
    exclude: [...externalPackages, serverModuleRelative],
  },
  build: {
    rollupOptions: {
      external: [...externalPackages, serverModuleRelative, serverModuleAbsolute],
    },
  },
});
