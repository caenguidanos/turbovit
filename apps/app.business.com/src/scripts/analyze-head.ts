export function injectAnalyzeHead(): void {
   globalThis.analyzeHead = function () {
      let existsHeadAnalyzer = document.querySelector(".ct");

      if (!existsHeadAnalyzer) {
         let link = document.createElement("link");
         link.rel = "stylesheet";
         link.href = "https://csswizardry.com/ct/ct.css";
         link.classList.add("ct");
         document.head.appendChild(link);
      } else {
         existsHeadAnalyzer.remove();
      }
   };
}
