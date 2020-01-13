import cssVars from 'css-vars-ponyfill';

export function rvtPolyfill() {
  cssVars({
    onComplete: function(cssText, styleElms, cssVariables, benchmark) {
      const element = document.getElementById('css-vars-root');
      if (element) {
        element.style.display = 'block';
      }
    },
    preserveVars: true,
    silent: true,
    shadowDOM: true,
    watch: true
  });
}
