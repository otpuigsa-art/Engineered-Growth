export default defineConfig({
  plugins: [react()],
  base: '/',   // 👈 AIXÒ ÉS CLAU
  build: {
    outDir: 'dist',
  },
});
