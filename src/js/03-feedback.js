import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('form'),
  inputEl: document.querySelector('input'),
  textAreaEl: document.querySelector('textarea'),
};

const STORAGE_DATA = 'feedback-form-state';

const formData = {
  email: "",
  message: "",
};


if (localStorage.getItem(STORAGE_DATA) !== null) {
  refs.inputEl.value = JSON.parse(localStorage.getItem(STORAGE_DATA)).email;
  refs.textAreaEl.value = JSON.parse(
    localStorage.getItem(STORAGE_DATA)
  ).message;
  formData.email = refs.inputEl.value;
  formData.message = refs.textAreaEl.value;
};


refs.formEl.addEventListener('input', throttle(makeLocalStorageData, 500));
refs.formEl.addEventListener('submit', onSubmit);


function makeLocalStorageData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_DATA, JSON.stringify(formData));
};

function onSubmit(e) {
  e.preventDefault();
  if(refs.inputEl.value === "" || refs.textAreaEl.value === "") {
    return alert ("Ops.. All lines must be filled!")
  } 
  else {
  localStorage.removeItem(STORAGE_DATA);
  refs.formEl.reset();
  console.log(formData);
  };
};
