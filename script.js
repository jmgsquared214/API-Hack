'use strict';

function getFoodInfo() {
  $('.js-form').on('submit', function(){
    event.preventDefault();
    const apiKey = 'RwF2lQB673HZPRaw9tmfa7arFAiPTb8e3Q1FSMh5';
    const url = `https://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=${apiKey} `;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson, food))
  })
}

function displayResults() {

}

$(document).ready( function () {
    $('#myTable').DataTable();
} );
