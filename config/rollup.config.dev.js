import baseConfig from './rollup.config.base'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'examples/src/app.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    postcss({
      minimize: process.env.NODE_ENV === 'production'
      // use: ['e']
    }),
    ...baseConfig.plugins,
    serve({
      open: true,
      port: 8080,
      verbose: true,
      contentBase: ['', 'examples/src'],
      openPage: '/index.html'
    }),
    livereload({ watch: 'examples/src' })
  ]
}
