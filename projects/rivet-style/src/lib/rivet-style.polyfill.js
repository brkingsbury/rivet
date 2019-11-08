import cssVars from 'css-vars-ponyfill';

export default function rvtPolyfill() {
  cssVars({
    onComplete: function(cssText, styleElms, cssVariables, benchmark) {
      var element = document.getElementById('css-vars-root');
      if (element) {
        element.style.display = 'block';
      }
    },
    preserveVars: true,
    silent: true,
    shadowDOM: true,
    updateURLs: false,
    watch: true
  });
}
