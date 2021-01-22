(function(){
    preview.style.display = 'none';
    myfile.addEventListener('change', function () {
        const file = this.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            preview.style.display = 'block';
            preview.setAttribute('src', this.result)
        })
        reader.readAsDataURL(file);
    })
})();