function getInputValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueById (id){
    const sBalance = document.getElementById(id).innerText;
    const balance = parseFloat(sBalance);
    return balance;
}



function showSectionById (id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}