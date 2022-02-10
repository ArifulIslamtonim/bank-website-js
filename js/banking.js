document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input');
    const depositAmount = depositField.value;
    // deposit
    const newDepositAmount = parseFloat(depositAmount);
    const depositMoney = document.getElementById('deposit-total');
    const previousDeposit = depositMoney.innerText;
    const previousDepositAmount = parseFloat(previousDeposit);
    const depositTotal = previousDepositAmount + newDepositAmount;
    depositMoney.innerText = depositTotal ;
   
    // add with balance
    const balance = document.getElementById('balance-total');
    const newBalance = balance.innerText;
    const previousBalance = parseFloat(newBalance);
    const totalBalance = previousBalance + newDepositAmount;
    balance.innerText = totalBalance;

    depositField.value = '';
});

// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function (){
    const withdrawalMoney = document.getElementById('withdraw-input');
    const newWithdrawalMoney = withdrawalMoney.value;
    const withdrawAmount = parseFloat(newWithdrawalMoney);

   const withdrawTotal = document.getElementById('withdraw-total');
   const newWithdraw = withdrawTotal.innerText;
   const newWithdrawAmount = parseFloat(newWithdraw);
   const totalwithdraw = newWithdrawAmount + withdrawAmount;
   withdrawTotal.innerText = totalwithdraw;
   withdrawalMoney.value = '';

//    balance theke
const balanceTotal = document.getElementById('balance-total');
const newBalances = balanceTotal.innerText;
const previousBalances = parseFloat(newBalances);
const totalBalances = previousBalances - withdrawAmount;
balanceTotal.innerText = totalBalances;

})
