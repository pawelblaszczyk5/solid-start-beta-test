import solid from "solid-start/vite";
import UnoCss from "unocss/vite";
import { defineConfig } from "vite";
import { whyframe } from "@whyframe/core";
import { whyframeJsx } from "@whyframe/jsx";

export default defineConfig({
  plugins: [whyframeJsx(), whyframe(), UnoCss(), solid()],
});
