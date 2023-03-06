import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts', // 打包入口
  output: {
    name: 'laxinbaAppLib',
    file: 'dist/index.js',
    format: 'umd',
  },
  plugins: [
    // 打包插件
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript({
      outDir: 'dist',
      declaration: true,
      declarationDir: 'typing',
    }), // 解析TypeScript
    babel({ babelHelpers: 'bundled' }), // babel配置,编译es6
  ],
}
