import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import uglify from 'rollup-plugin-uglify'

const input = 'lib/safe-money.js'
const defaultPlugins = [
  babel({
    babelrc: false,
    plugins: ['external-helpers'],
    presets: [['env', {modules: false}]]
  }),
  filesize()
]

const minPlugins = [].concat(defaultPlugins, [uglify()])

export default [
  {
    input,
    plugins: defaultPlugins,
    external: ['isomorphic-fetch', 'simple-sha1'],
    output: [
      {
        file: 'dist/safe-money.js',
        format: 'cjs'
      },
      {
        file: 'dist/safe-money.es.js',
        format: 'es'
      },
      {
        file: 'dist/safe-money-browser.js',
        format: 'umd',
        name: 'safeMoney'
      }
    ]
  },
  {
    input,
    plugins: minPlugins,
    output: {
      file: 'dist/safe-money-browser.min.js',
      format: 'umd',
      name: 'safeMoney'
    }
  }
]
