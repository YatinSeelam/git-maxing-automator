import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
import { componentTagger } from "lovable-tagger";
=======
<<<<<<< HEAD
=======
import { componentTagger } from "lovable-tagger";
>>>>>>> 53f3a4bbad491f9977fc35744d519860fe1c8114
>>>>>>> 025369236defc4bf429896af5d82fee7e23c90f9

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
<<<<<<< HEAD
    mode === 'development' &&
    componentTagger(),
=======
<<<<<<< HEAD
    // Remove the incomplete conditional line
=======
    mode === 'development' &&
    componentTagger(),
>>>>>>> 53f3a4bbad491f9977fc35744d519860fe1c8114
>>>>>>> 025369236defc4bf429896af5d82fee7e23c90f9
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
}));
=======
<<<<<<< HEAD
}));
=======
}));
>>>>>>> 53f3a4bbad491f9977fc35744d519860fe1c8114
>>>>>>> 025369236defc4bf429896af5d82fee7e23c90f9
