import iziToast from 'izitoast';

export default ({ message, title }) => {
  return {
    info: () => {
      iziToast.info({
        title: title,
        message: message,
        position: 'topRight'
      });
    },
    success: () => {
      iziToast.success({
        title: title,
        message: message,
        position: 'topRight'
      });
    },
    warning: () => {
      iziToast.warning({
        title: title,
        message: message,
        position: 'topRight'
      });
    },
    error: () => {
      iziToast.error({
        title: title,
        message: message,
        position: 'topRight'
      });
    }
  }
}
