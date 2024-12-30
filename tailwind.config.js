/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",            // Archivos HTML en la raíz
    "./**/*.html",         // Archivos HTML en subcarpetas
    "./**/*.js",           // Archivos JS en subcarpetas
    "!./node_modules/**"   // Excluye node_modules
  ], // Busca en todas las carpetas HTML y JS
  theme: {
    extend: {},
  },
  plugins: [],
};
