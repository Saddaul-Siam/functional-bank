document.getElementById('login-submit').addEventListener('click', function () {
  // get user email 
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;

  //  get user password
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;
  if (userEmail == 'sontan@baap.com' && userPassword == 'sontan') {
    window.location.href = 'banking.html'
  }

})



/* 
const depositBtn = document.getElementById("deposit-button")
const withdrawBtn = document.getElementById("withdraw-button")

depositBtn.addEventListener('click', function () {
  changeBalance("deposit")
})

withdrawBtn.addEventListener('click', function () {
  changeBalance("withdraw")
})

function changeBalance(type) {
  // console.log(`${type}-total`)
  const previousTotal = document.getElementById(type + "-total")
  const previousTotalText = previousTotal.innerText
  const previousTotalNumber = parseFloat(previousTotalText)

  const newMoney = document.getElementById(`${type}-input`)
  const newMoneyText = newMoney.value
  if (newMoneyText.length != 0) {
    const newMoneyNumber = parseFloat(newMoneyText)

    previousTotal.innerText = previousTotalNumber + newMoneyNumber
    newMoney.value = ""

    const balanceTotal = document.getElementById("balance-total")
    const balanceTotalText = balanceTotal.innerText
    const balanceTotalNumber = parseFloat(balanceTotalText)

    if (type == "withdraw") {
      balanceTotal.innerText = balanceTotalNumber - newMoneyNumber
    }
    else {
      balanceTotal.innerText = balanceTotalNumber + newMoneyNumber
    }
  }
  else {
    alert("Please enter a number")
  }

} */