const debug = process.env.NODE_ENV === "production";

module.exports = {
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/ko": { page: "/ko" },
    };
  },
  assetPrefix: debug
    ? ""
    : "https://github.com/filoscoder/just-javascript-intl",
};
