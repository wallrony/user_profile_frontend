export function showToast(msg: string = '') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  if (toast) {
    if (toastMsg) {
      toastMsg.innerText = msg;
    }

    toast.className = 'show';

    setTimeout(() => {
      toast.className = '';
    }, 2500);
  }
}