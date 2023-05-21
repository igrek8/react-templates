import { program } from 'commander';
import path from 'path';
import webpack from 'webpack';
import externals from 'webpack-node-externals';

interface WatchOptions {
  source: string;
  out: string;
  watch: boolean;
  sourceMaps: boolean;
}

program
  .name('@react-templates/cli')
  .version('0.0.1')
  .command('build')
  .description('builds react templates')
  .requiredOption('-s, --source <path>', 'path to source', (source) => path.resolve(source))
  .requiredOption('-o, --out <path>', 'output path', (out) => path.resolve(out))
  .requiredOption('-w, --watch', 'enable watch mode', false)
  .requiredOption('--source-maps', 'enable source maps', false)
  .action((options: WatchOptions) => {
    webpack(
      {
        mode: 'production',
        devtool: options.sourceMaps ? 'source-map' : false,
        watch: options.watch,
        entry: {
          index: options.source,
        },
        output: {
          path: options.out,
          libraryTarget: 'commonjs2',
          publicPath: '__webpack_public_path__' + '/',
          assetModuleFilename: 'static/[hash][ext][query]',
          hashFunction: 'sha256',
          clean: true,
        },
        externalsPresets: {
          node: true,
        },
        externals: [
          externals({
            modulesFromFile: true,
          }),
        ],
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          extensionAlias: {
            '.js': ['.js', '.ts'],
            '.cjs': ['.cjs', '.cts'],
            '.mjs': ['.mjs', '.mts'],
          },
        },
        module: {
          rules: [
            {
              oneOf: [
                {
                  test: /\.css$/i,
                  use: [
                    path.join(__dirname, '..', 'loader.js'),
                    {
                      loader: 'css-loader',
                      options: {
                        modules: /\.module\.css$/i,
                      },
                    },
                  ],
                },
                {
                  test: /\.(js|jsx|cjs|mjs)?$/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        '@babel/preset-react',
                        [
                          '@babel/preset-env',
                          {
                            targets: {
                              node: 'current',
                            },
                          },
                        ],
                      ],
                    },
                  },
                },
                {
                  test: /\.(ts|tsx|cts|mts)$/i,
                  loader: 'ts-loader',
                  options: {
                    compilerOptions: {
                      declaration: true,
                      declarationMap: options.sourceMaps,
                      outDir: options.out,
                    },
                  },
                },
                {
                  type: 'asset/resource',
                },
              ],
            },
          ],
        },
      },
      (err, stats) => {
        if (err) throw err;
        console.log(stats?.toString({ colors: true }));
      }
    );
  });

program.parse();
