import './main.scss';
import fetchResults from './app/app';

import './app/alertService';


const searchField = document.querySelector('.search-box');
const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const searchValue = searchField.value;
  searchValue.trim();
  if (searchValue) {
    fetchResults(searchValue);
    searchField.value = '';
  }
});