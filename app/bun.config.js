// bun.config.js
module.exports = {
    entry: 'src',
    output: {
        dir: 'static',
        format: 'iife',
        filename: 'pywiza.js',
        sourcemap: false,
    },
    plugins: [
        // Add any plugins you need here
    ],
};
