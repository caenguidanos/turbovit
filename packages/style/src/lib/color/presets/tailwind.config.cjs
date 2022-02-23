function withOpacity(property) {
   return ({ opacityValue }) => {
      if (opacityValue === undefined) {
         return `rgb(var(${property}))`;
      }
      return `rgb(var(${property}) / ${opacityValue})`;
   };
}

module.exports = {
   theme: {
      colors: {
         primary: withOpacity("--root-tw-colors-primary"),
      },
   },
};
