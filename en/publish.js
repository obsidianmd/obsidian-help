publish.registerMarkdownPostProcessor(async (el, ctx) => {
  const selectElement = el.querySelector('.select_location');
  if (selectElement) {
    selectElement.addEventListener('change', function() {
      var url = this.value;
      if (url) {
        window.location = url;
      }
    });
  }
});
