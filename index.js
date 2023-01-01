// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}


function setBestCustomer() {
  window.bestCustomer = 'not bob';
}
function overwriteBestCustomer() {

  window.bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'john';
  leastFavoriteCustomer = 'mary';
  console.log(leastFavoriteCustomer);
}
