// get deposit button.
document.getElementById('deposit-button').addEventListener('click',function(){
    
    // get deposit input.
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const parseDepositInputText = parseFloat(depositInputText);
    

    // get deposit total.
    const depositTotal = document.getElementById('total-deposit');
    const depositTotalText = depositTotal.innerText;
    const parseDepositTotalText = parseFloat(depositTotalText);
    const allDeposit = parseDepositTotalText + parseDepositInputText;
    depositTotal.innerText = allDeposit;

    // update totale balance.
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const parseTotalBalanceText = parseFloat(totalBalanceText);

    const allBalanceDeposit = parseTotalBalanceText + parseDepositInputText;
    totalBalance.innerText = allBalanceDeposit;

    // clear deposite field.
    depositInput.value = '';
})

// withdraw button.
document.getElementById('withdraw-button').addEventListener('click',function(){
    
    // get withdraw input.
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const parseWithdrawInputText = parseFloat(withdrawInputText);

    // get withdraw total.
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const parseWithdrawTotalText = parseFloat(withdrawTotalText);
    const allWithdraw = parseWithdrawTotalText + parseWithdrawInputText;
    withdrawTotal.innerText = allWithdraw;

    // minus total balance to withdraw.
    const totalBalance2 = document.getElementById('total-balance');
    const totalBalance2Text = totalBalance2.innerText;
    const parseTotalBalance2Text = parseFloat(totalBalance2Text);

    const minusTotalToWithdraw = parseTotalBalance2Text - parseWithdrawInputText;
    totalBalance2.innerText = minusTotalToWithdraw;

    // clear withdraw input.
    withdrawInput.value = '';
})