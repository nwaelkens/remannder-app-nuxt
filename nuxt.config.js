// Require dotenv package so we can access the variables
require("dotenv").config();

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  env: {
    assetBase: process.env.VUE_APP_ASSET_BASE || "http://localhost:1337"
  },
  router: {
    middleware: ["auth"]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/dotenv"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/pwa"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    https: false,
    progress: true,
    credentials: false,
    retry: { retries: 3 },
    debug: false,
    baseURL: process.env.AXIOS_BASE_URL
  },
  auth: {
    login: "/login",
    logout: "/logout",
    strategies: {
      auth: {
        _scheme: "local",
        endpoints: {
          login: {
            url: "/auth/local",
            method: "post",
            propertyName: "jwt"
          }
        },
        tokenRequired: true,
        tokenType: "Bearer"
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
