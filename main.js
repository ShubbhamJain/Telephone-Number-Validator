let check = document.querySelector('#telecheckbtn').addEventListener('click', checking);

let output = document.querySelector('#output');

function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s|-]?\d{3}[\s|-]?\d{4}$/;
  if (regex.test(str)) {
    return true;
  }
  return false;
}

function checking() {
  let input = document.querySelector('#teleinput').value;

  if (input == "") {
    output.innerHTML = `<h4>Enter a Valid Number to check.</h4>`;
  }
  else {
    if (telephoneCheck(input)) {
      output.innerHTML = `<h4>${input} is a valid telephone number.</h4>`;
    }
    else {
      output.innerHTML = `<h4>${input} is not a valid telephone number.</h4>`;
    }
  }
}
