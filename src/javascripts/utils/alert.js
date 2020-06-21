import swal from 'sweetalert';

class Alert {
  constructor({ message, title }) {
    this.message = message;
    this.title = title;
  }

  basic = () => swal(this.message);

  success = () => swal(this.title, this.message, 'success');

  warning = () => swal(this.title, this.message, 'warning');

  info = () => swal(this.title, this.message, 'info');

  error = () => swal(this.title, this.message, 'error');

  danger = ({ acceptMessage, denyMessage, accecpCallback }) => {
    swal({
        title: this.title,
        text: this.message,
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          accecpCallback && accecpCallback();

          swal(acceptMessage, {
            icon: 'success',
          });
        } else {
          swal(denyMessage);
        }
      });
  }

  withTimeout = (timeout) => {
    swal(this.message, {
      buttons: false,
      timer: timeout,
    });
  }
}

export default Alert;
