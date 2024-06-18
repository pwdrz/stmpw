import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/tailwind.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
