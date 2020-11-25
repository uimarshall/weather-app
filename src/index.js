import './main.scss';
import fetchResults from './app/app';


const searchField = document.querySelector('.search-box');
const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const searchValue = searchField.value;
  
  if (searchValue) {
    fetchResults(searchValue);
    searchField.value = '';
  }
});