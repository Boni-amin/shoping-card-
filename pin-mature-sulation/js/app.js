function getPin (){
    const pin = Math.round(Math.random()*10000);
    const pinSring = pin + '';
    if(pinSring.length == 4 ){
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
   const pin =  getPin ();
   document.getElementById('display-pin').value = pin;

    // console.log(pin);
}  

document.getElementById('key-pad').addEventListener('click', function(even){
    const number = even.target.innerText;
    const calc = document.getElementById('type-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }
    }
    else{
        const preCalc = calc.value;
        const newCalc = preCalc + number;
        calc.value = newCalc;
    }
    
})


document.getElementById('verify-pin').addEventListener('click', function(){
    const displsyPin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('type-numbers').value;


    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');

    if (displsyPin == typeNumber) {
        notifySuccess.style.display= 'block'
        notifyFail.style.display= 'none'
        console.log ('ok')
    }
    else{
        notifyFail.style.display= 'block'
        notifySuccess.style.display= 'none'
        console.log ('not amtch')
    }
})