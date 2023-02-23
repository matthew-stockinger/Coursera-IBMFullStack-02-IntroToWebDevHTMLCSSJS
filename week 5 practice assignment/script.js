function updateRate() {
  const rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

function compute() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);
  const interest = (principal * years * rate) / 100;
  const amount = principal + interest;
  const result = document.getElementById("result");

  const futureYear = years + new Date().getFullYear();

  if (validatePrincipalInput(principal)) {
    result.innerHTML = `If you deposit <mark>$${principal}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>,<br>
    you will receive an amount of <mark>$${amount}</mark>,<br>
    in the year <mark>${futureYear}</mark>.<br>`;
  }
}

function validatePrincipalInput(principalInputValue) {
  const principalInput = document.getElementById("principal");

  if (principalInputValue <= 0) {
    alert("Please enter a positive number");
    principalInput.focus();
    return false;
  } else {
    return true;
  }
}
