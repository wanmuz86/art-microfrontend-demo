import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { name } from './package.json';

// setup the build process for our micro-frontend application
// the host application will load our microfront after it is built

export default defineConfig({
 plugins: [react()],
 base: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',
  build: {
   target: 'esnext',
   outDir: 'dist',

 },
 server: {
   port: 4173,
   cors: true,
   headers: {
     'Access-Control-Allow-Origin': '*',
   },
 },
 define: {
   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
 },
});
