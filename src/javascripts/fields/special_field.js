import $ from 'jquery';
import Cleave from 'cleave.js';
import slugify from 'slugify';
import daterangepicker from'bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';

$(document).ready(() => {
  // CURRENCY FIELD
  $('.currency').each(function() {
    const plainValue = $(this).next().val();
    $(this).val(plainValue)
    const phone = new Cleave(`#${this.id}`, {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
    });

    $(this).on('keyup', () => {
      $(this).next().val($(this).val().replace(/[^0-9\.]/g, ''));
    });
  });

  // SLUGS
  $('.slug').each(function() {
    const slug = $(this)

    slug.on('keydown', (event) => {
      if (!event.key.match(/[\w\?\&=\+%-]/)) event.preventDefault();
    })

    $(`#${slug.attr('target_id')}`).on('keyup', function() {
      slug.val(slugify($(this).val()))
    })
  })

  $('.datepicker').each(function() {
    const minDate = $(this).attr('min_date');
    const maxDate = $(this).attr('max_date');

    $(`#${this.id}`).daterangepicker({
      locale: {
        format: 'YYYY-MM-DD'
      },
      minDate: minDate || this.value,
      maxDate: maxDate,
      todayHighlight: true,
      singleDatePicker: true,
    })
  })
});
