document.querySelector('.select_location').addEventListener('change', function() {
    var url = this.value;
    if (url) {
        window.location = url;
    }
});
