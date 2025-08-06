import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configurazione per GitHub Pages
  base: "/U3-W3-D3/", // Sostituisci con il nome del tuo repository GitHub
});
