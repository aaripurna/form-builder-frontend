import $ from 'jquery';
import select2 from 'select2';

$(document).ready(() => {
  $('.select2').each(function() {
    $(this).select2({
      multiple: $(this).prop('multiple'),
    });
    if ($(this).hasClass('is-invalid')){
      
    }
  });
});
