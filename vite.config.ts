import type { UserConfig } from "vite";
import { one } from "one/vite";
import { tamaguiPlugin } from "@tamagui/vite-plugin";
import tailwindcss from "tailwindcss";

export default {
  plugins: [
    one({
      web: {
        defaultRenderMode: "ssg",
        deploy: "vercel",
      },
      server: {
        platform: "vercel",
      },
      app: {
        // set to the key of your native app
        // will call AppRegistry.registerComponent(app.key)
        key: "one-example",
      },
    }),

    tamaguiPlugin({
      optimize: true,
      components: ["tamagui"],
      config: "./config/tamagui/tamagui.config.ts",
      outputCSS: "./app/tamagui.css",
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
} satisfies UserConfig;
