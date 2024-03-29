const { faL } = require("@fortawesome/free-solid-svg-icons");
const { defineConfig } = require("@vue/cli-service");

const path = require("path");

const name = process.env.VUE_APP_TITLE;

const http = process.env.VUE_APP_HTTP;
const host = process.env.VUE_APP_HOST;
const port = process.env.VUE_APP_PORT;

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: "dist",
  // assetsDir: "static",
  devServer: {
    port: port,
    open: {
      target: [`${http}://${host}:${port}`],
    },
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "#": path.resolve(__dirname, "public"),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";@import "@/styles/_customs.scss";`,
      },
    },
  },
});
