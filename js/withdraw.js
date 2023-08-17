document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get withdraw field
  const withdrawField = document.getElementById("new-withdraw");
  const newWithdrawAmount = parseFloat(withdrawField.value);

  //   set withdraw amount
  const showWithdraw = document.getElementById("withdraw");
  const previousWithdrawAmount = parseFloat(showWithdraw.innerText);
  const currentTotalWithdraw = previousWithdrawAmount + newWithdrawAmount;
  showWithdraw.innerText = currentTotalWithdraw;

  //   adjust balance
  const balanceField = document.getElementById("balance");
  const previousBalanceAmount = parseFloat(balanceField.innerText);
  const newBanalceAmount = previousBalanceAmount - newWithdrawAmount;
  balanceField.innerText = newBanalceAmount;

  // clearing deposit field
  withdrawField.value = "";
});
