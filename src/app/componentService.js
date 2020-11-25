
const spinner = document.getElementById('spinner');

const showSpinner = () => {
  spinner.className = 'show';
  setTimeout(() => {
    spinner.className = spinner.className.replace('show', '');
  }, 5000);
};

const hideSpinner = () => {
  spinner.className = spinner.className.replace('show', '');
};


export { showSpinner, hideSpinner };