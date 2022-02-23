module.exports = {
   content: ["src/**/*.{ts,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "var(--color-primary)"
         }
      }
   },
   plugins: [],
   corePlugins: {
      preflight: false
   },
   prefix: "btn-"
};
