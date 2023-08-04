// uno.config.js
import { defineConfig, presetAttributify, presetUno } from 'unocss'

// https://unocss.dev/guide/config-file
export default defineConfig({
    presets: [presetAttributify(),presetUno()],
    rules: [
      // your custom rules
    ],
})