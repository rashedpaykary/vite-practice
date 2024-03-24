import { defineConfig } from "vite";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  plugins: [jsconfigPaths()],
  server: {
    port: 4001,
    // این سرور و پورت رو خودمون اضافه کردیم برای تغییر پورت حالا پورت رو عوض کنیم بعد npm run dev بزنیم میره رو اون پورت
  },
});
