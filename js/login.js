document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = getInputValueById('phone-number');
    const pinNumber = getInputValueById('pin-number');
    if(phoneNumber === '1234' && pinNumber === '1234'){
        window.location.href = '/home.html'
    }
    else{
        alert('Invalid Number Or Pin')
    }
})