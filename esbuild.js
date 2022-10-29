const esbuild = require('esbuild');

// ESM - Currently disabled as CommonJS named exports seem to work pretty well with ESM based imports
/*esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: 'esm',
    target: ['esnext']
  })
  .catch(() => process.exit(1));*/

// CJS
esbuild
  .build({
    entryPoints: ['src/index.ts'],
    // outfile: 'dist/index.cjs.js',
    outfile: 'dist/index.js',
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: 'node',
    target: ['node14.16']
  })
  .catch(() => process.exit(1));
