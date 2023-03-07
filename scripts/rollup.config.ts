import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    terser(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
  ],
  external: ['@nestjs/common', '@nestjs/core'],
}
