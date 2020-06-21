import $ from 'jquery';

$(document).ready(() => {
  $('.image-upload').on('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
    const preview = $(this).parents('.image-preview')

    reader.addEventListener('load', () => {
      preview.css({ 'background-image': `url('${reader.result}')` })
    })

    if (file) reader.readAsDataURL(file);
  });
});
