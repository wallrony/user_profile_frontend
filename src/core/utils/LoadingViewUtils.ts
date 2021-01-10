export function showLoadingView() {
  const loadingView = document.getElementById('app-loading-view');

  if (loadingView) {
    loadingView.className = 'prepare';

    setTimeout(() => {
      loadingView.className = 'show';
    }, 100);
  }
}

export function hideLoadingView() {
  const loadingView = document.getElementById('app-loading-view');

  if (loadingView) {
    loadingView.className = 'prepare';
    setTimeout(() => {
      loadingView.className = '';
    }, 350);
  }
}