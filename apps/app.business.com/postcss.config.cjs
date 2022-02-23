module.exports = {
   syntax: "postcss-scss",
   plugins: [
      require("postcss-import"),
      require("postcss-url"),
      require("tailwindcss/nesting")(require("postcss-nesting")),
      require("tailwindcss"),
      require("autoprefixer"),
   ],
};
