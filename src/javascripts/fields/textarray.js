import $ from 'jquery';

$(document).ready(() => {
  $('.textarray').each(function() {
    const parent = $(this);
    $(this).find('.delete-button').each(function() {
      $(this).on('click', function() {
        $(this).parents('.textarray-container').remove();
      });
    });

    $(this).find('.add-new-line').on('click', function() {
      const element = parent.find('.textarray-container').first().clone();
      element.find('.form-control').attr({ value: null, id: null });
      element.find('.form-control').val(null);
      element.append(`<i class="fas fa-trash delete-button"></i>`);
      element.insertBefore(this);
      element.find('.delete-button').on('click', function() {
        $(this).parents('.textarray-container').remove();
      })
    });
  });
});
