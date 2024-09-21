document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const outMoney = getInputValueById('cash-out-input');
    const pinNumber = getInputValueById('cash-out-pin');
    const balance = getTextValueById('total-balance');
    if(isNaN(outMoney)){
        alert('Wrong Ammount')
        return;
    }
    if(pinNumber === 1234){
        if(outMoney > balance){
            alert('Taka Nai Fokir');
            return;
        }
        const total = balance- outMoney;
        document.getElementById('total-balance').innerText = total;
        // add to transactions
        const entryAdd = document.createElement('div');
        entryAdd.classList.add('bg-red-400');
        entryAdd.classList.add('text-black');
        entryAdd.classList.add('py-4');
        entryAdd.innerText = `Out money: ${outMoney} tk   New Balance: ${total}`;
        document.getElementById('transactions-div').appendChild(entryAdd);
    }
    outMoney = '';
    pinNumber = '';
})