import typescript from '@rollup/plugin-typescript';
// import clean from '@open-tech-world/rollup-plugin-clean';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'esm',
    preserveModules: true,
  },
  // plugins: [clean('lib/**'), typescript({ tsconfig: './tsconfig.json' })],
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
  external: [],
};
