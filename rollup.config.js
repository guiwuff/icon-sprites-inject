import typescript from 'rollup-plugin-typescript';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import {sizeSnapshot} from 'rollup-plugin-size-snapshot';
import clean from 'rollup-plugin-clean';
import serve from 'rollup-plugin-serve';

const env = process.env.NODE_ENV;

const production = {
  input: './src/sprite-injector.ts',
  output: [
    {
      format: 'iife',
      file: 'dist/index.js',
      sourcemap: true,
      name: 'spriteInjector'
    },{
      format: 'esm',
      file: 'dist/index.esm.js',
      sourcemap: true,
      browser: true }
  ],
  plugins: [
    sizeSnapshot(),
    copy({ targets: ['src/assets/sprites.svg'], outputFolder: 'dist/assets/'}),
    commonjs(),
    resolve(),
    globals(),
    builtins(),
    typescript(),
    clean(),
  ]
}

const development = {
  input: './src/sprite-injector.ts',
  output: [
    { name: 'main',
      format: 'iife',
      file: 'www/index.js',
      browser: true } ],
  plugins: [
    serve({ port: 11100, contentBase: ['www'] }),
    sizeSnapshot(),
    copy({ targets: ['src/assets/sprites.svg'], outputFolder: 'www/assets/'}),
    commonjs(),
    resolve(),
    globals(),
    builtins(),
    typescript(),
    clean(),
  ]
}

export default () => {
  // console.log(env);
  if (env == 'production') return production;
  return development;
}
