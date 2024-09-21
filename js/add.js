document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputValueById('add-money-input');
    const pinNumber = getInputValueById('add-money-pin');
    const balance = getTextValueById('total-balance');
    if(isNaN(addMoney)){
        alert('Enter The Number Of Ammount')
        return;
    }
    if(pinNumber === 1234){
        const total = addMoney + balance;
        document.getElementById('total-balance').innerText = total;

        // add to transactions
        const entryAdd = document.createElement('div');
        entryAdd.classList.add('bg-blue-400');
        entryAdd.classList.add('text-black');
        entryAdd.classList.add('py-4');
        entryAdd.innerText = `Add money: ${addMoney} tk   New Balance: ${total}`;
        document.getElementById('transactions-div').appendChild(entryAdd);
    }
    else(
        alert('Type Valid Details')
    )
    addMoney = '';
    pinNumber = '';
})