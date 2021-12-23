import throttle from 'lodash/throttle';

const STORAGE_KEY = 'feedback-from-state';
const form = document.querySelector('.feedback-form');

const localStorageData = JSON.parse(localStorage.getItem('STORAGE_KEY'));

if (localStorageData) {
  form['email'].value = localStorageData.email;
  form['message'].value = localStorageData.message;
}

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onMessageInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

  if(form['email'].value === "" || form['message'].value === ""){
    console.log("There is nothing to submit! Fill up the fields!");
    return;
  }

  console.log({
    email: `${form['email'].value}`,
    message: `${form['message'].value}`,
  });

  localStorage.removeItem('STORAGE_KEY');
  e.currentTarget.reset();
}

function onMessageInput(e) {
  localStorage.setItem(
    'STORAGE_KEY',
    JSON.stringify({
      email: `${form['email'].value}`,
      message: `${form['message'].value}`,
    }),
  );
}
