document.getElementById("btn-deposit").addEventListener("click", function () {
  //  get deposit field
  const depositField = document.getElementById("new-deposit");
  const newDepositAmount = parseFloat(depositField.value);

  // set deposit amount
  const showDeposit = document.getElementById("deposit");
  const previousTotalDeposit = parseFloat(showDeposit.innerText);
  const currentTotalDeposit = previousTotalDeposit + newDepositAmount;
  showDeposit.innerText = currentTotalDeposit;

  // adjust balance
  const balanceField = document.getElementById("balance");
  const previousBalanceAmount = parseFloat(balanceField.innerText);
  const newBanalceAmount = previousBalanceAmount + newDepositAmount;
  balanceField.innerText = newBanalceAmount;

  // clearing deposit field
  depositField.value = "";
});
