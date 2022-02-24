export function injectAnalyzeSpacing(): void {
   let script = document.createElement("script");
   script.src = "https://unpkg.com/spacingjs";
   script.defer = true;
   document.body.appendChild(script);
}
