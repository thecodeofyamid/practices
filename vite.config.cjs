import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // La raíz será la carpeta principal del proyecto
  server: {
    open: true, // Abre automáticamente el navegador en la raíz
    fs: {
      allow: ["."], // Permite el acceso a todos los subdirectorios
    },
  },
});
