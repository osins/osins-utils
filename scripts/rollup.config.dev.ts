import baseConfig from './rollup.config.base'
import livereload from 'rollup-plugin-livereload'

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    livereload({
      watch: 'examples/brower',
    }),
  ],
}
