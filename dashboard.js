let depositBtn = document.getElementById('depositBtn');
let withdrowBtn = document.getElementById('withdrowBtn');

depositBtn.addEventListener('click', function(){

    let inputDepositBoxId = inputBoxes('depositInputBox','error');
    let previousDepositValue = previousBalanceBoxes('previousDepositAmount');
    let previousBalanceValue = previousBalanceBoxes('previousBalanceAmount');

    calculatAmount('previousDepositAmount', inputDepositBoxId, previousDepositValue, previousBalanceValue, true);
});

withdrowBtn.addEventListener('click', function(){

    let inputWithdrowBoxId = inputBoxes('withdrowInputBox', 'errors');
    let previousWithdrowValue = previousBalanceBoxes('previousWithdrowAmount');
    let previousBalanceValue = previousBalanceBoxes('previousBalanceAmount');

    if(inputWithdrowBoxId > previousBalanceValue){
        document.getElementById('withdrowInputBox').style.border = '2px solid red'
        document.getElementById('errors').innerText = 'Your Account Balance is Low';
    }else{

        calculatAmount('previousWithdrowAmount', inputWithdrowBoxId, previousWithdrowValue, previousBalanceValue, false);
    }


});



function inputBoxes(inputBoxId, errorId){

    let inputBox = document.getElementById(inputBoxId);
    let inputBoxValue = inputBox.value;

    if(inputBoxValue == ''){

        inputBox.style.border = '2px solid red';
        document.getElementById(errorId).innerText = 'Input a Number';

        return inputBoxValueToNumber;
    }else{

        let inputBoxValueToNumber = parseFloat(inputBoxValue);

        inputBox.value = '';
        return inputBoxValueToNumber;
    }

}


function previousBalanceBoxes(previousBalanceId) {
    
    let previousBalanceBox = document.getElementById(previousBalanceId);
    let previousBalance = previousBalanceBox.innerText;
    let previousBalanceToNumber = parseFloat(previousBalance);

    previousBalanceBox.value = '';
    return previousBalanceToNumber;
}



function calculatAmount(inputCalculateId, previousAmountId, previousbalanceId, currentbalanceId, plusOrMainas) {

    let calculate = document.getElementById(inputCalculateId);
    let totalDeposit = previousAmountId + previousbalanceId;
    calculate.innerText = totalDeposit;

    if(plusOrMainas == true){
        let totalBalance = previousAmountId + currentbalanceId;
        document.getElementById('previousBalanceAmount').innerText = totalBalance;

    }else{

        let totalBalance = currentbalanceId  - previousAmountId;
        document.getElementById('previousBalanceAmount').innerText = totalBalance;
    }

};

