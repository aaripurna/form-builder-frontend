import $ from 'jquery';
import summernote from 'summernote/dist/summernote-bs4';
import axios from 'axios';

import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/modal';

$(document).ready(() => {
  $('.summernote').each(function() {
    $(this).summernote({
      dialogsInBody: true,
      minHeight: 250,
      callbacks: {
        onImageUpload: function(file) {
          const form = new FormData();
          form.append('file', file[0])
          axios.post('/dashboard/blobs', form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => {
            $(this).summernote('insertImage', res.data.url, function(image){
              image.attr('alt', res.data.filename);
              image.attr('data-blobid', res.data.id);
            })
          })
        },
        onMediaDelete: function(target, editable) {
          axios.delete(`/dashboard/blobs/${$(target).data('blobid')}`)
          .catch(error => {
            throw error;
          })
        }
      }
    })
  })
});
