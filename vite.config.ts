import path from 'path';
import { defineConfig } from 'vite';

// Vite config settings go here
export default defineConfig({
    // Base URL MUST match the name of your repository for GitHub Pages to work
    base: '/roguelife426/',
    resolve: {
        alias: {
            // Allows to use "@assets" instead of specific assets folder path
            '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
});
