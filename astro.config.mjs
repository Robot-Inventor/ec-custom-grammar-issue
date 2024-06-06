import { defineConfig } from 'astro/config';
import regex from "@robot-inventor/regex-syntax";
import shellSession from "@robot-inventor/shell-session-syntax";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode({
    themes: ["dark-plus", "light-plus"]
  })],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
      langs: [regex, shellSession]
    }
  }
});
