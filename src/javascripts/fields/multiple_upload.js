import $ from 'jquery';
import Dropzone from 'dropzone';
import axios from 'axios';
import toastr from '../utils/toastr';
import { upload_url, csrf_token, media_url } from '../utils/config';


Dropzone.autoDiscover = false;

$(document).ready(() => {
  $('.multiple-upload').each(function() {
    const dropzone = new Dropzone(`#${this.id}`, {
      url: upload_url,
      addRemoveLinks: true,
      headers: {
        'X-CSRF-TOKEN':  csrf_token,
      },

      removedfile: (file) => {
        axios.delete("/dashboard/blobs/" + file.data.id)
        var _ref;
        return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
      },

      error: (error, message, _) => {
        toastr({ title: 'Error', message: message })
      },

      init: () => {
        const galleries = $(this).data("galleries")
        if (!galleries) return;
        axios.get(media_url, {params: {blob_ids: galleries}})
          .then(({ data }) => {
            data.map((value) => {
              var mockFile = { name: value.filename, size: value.byte_size , data: value};
              dropzone.emit("addedfile", mockFile);
              dropzone.emit("thumbnail", mockFile, value.thumbnail);
              dropzone.emit("complete", mockFile);
            })
          })
          .catch((err) => {
            toastr({ title: 'Error', message: err.message })
          })
      },
      success: (event, response) => {
        event.data = response;
        $(event.previewElement).append(`<input class='d-none' type='text' name="${$(this).data('params')}" value=${response.id} />`);
      }
    });
  });
});
