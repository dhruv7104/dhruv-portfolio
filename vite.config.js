import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Optional: Allow access from Vercel's preview domain
    allowedHosts: 'all'
  },
  build: {
    outDir: 'dist',
  },
  // Optional: For custom domain or GitHub Pages base path
  // base: '/your-repo-name/' 
});
