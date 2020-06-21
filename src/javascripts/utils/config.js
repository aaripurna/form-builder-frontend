import $ from 'jquery'

export const  upload_url = $("[name='upload-url']").attr('content')
export const  csrf_token = $("[name='csrf-token']").attr('content')
export const  media_url = $("[name='media-url']").attr('content')
