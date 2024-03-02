publish.registerMarkdownPostProcessor(async (el, ctx) => {
  const selectElement = el.querySelector('.select-location');
  if (selectElement) {
    selectElement.addEventListener('change', function() {
      var url = this.value;
      if (url) {
        window.location = url;
      }
    });
  }
});
